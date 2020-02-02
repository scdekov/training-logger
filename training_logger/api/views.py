from datetime import datetime

from rest_framework.views import APIView
from rest_framework import serializers, status, viewsets, mixins
from rest_framework.response import Response

from training_logger.models import Excercise, LogRecord, DailyMeasurements


class ExcerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excercise
        fields = ('id', 'name')


class ExcerciseView(APIView):
    def get(self, request):
        return Response(data=ExcerciseSerializer(Excercise.objects.all(), many=True).data)


class LogRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogRecord
        fields = ('id', 'excercise', 'excercise_name', 'is_warmup', 'reps',
                  'time_length', 'weight', 'notes', 'date_created', 'test_mode', 'user')

    excercise_name = serializers.SerializerMethodField()

    def get_excercise_name(self, instance):
        return instance.excercise.name


class LogRecordViewSet(mixins.ListModelMixin,
                       mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin,
                       viewsets.GenericViewSet):
    queryset = LogRecord.objects.all().order_by('-date_created')
    serializer_class = LogRecordSerializer

    def get_queryset(self):
        queryset = super().get_queryset().prefetch_related('excercise')
        if self.request.query_params.get('show-all') and self.request.user.is_superuser:
            return queryset
        if self.request.query_params.get('day'):
            day = datetime.strptime(self.request.query_params['day'], '%d-%m-%Y')
            queryset = queryset.filter(date_created__year=day.year,
                                       date_created__month=day.month,
                                       date_created__day=day.day)

        return queryset.filter(user=self.request.user)

    def create(self, request):
        excercise = Excercise.objects.get_or_create(name=request.data.get('name'))[0]
        LogRecord.objects.create(
            excercise=excercise,
            is_warmup=request.data.get('is_warmup', False),
            reps=request.data.get('reps') or None,
            time_length=request.data.get('time_length') or None,
            weight=request.data.get('weight') or None,
            notes=request.data.get('notes', ''),
            test_mode=request.data.get('test_mode', False),
            user=request.user
        )
        return Response(status=201)


class DailyMeasurementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyMeasurements
        fields = '__all__'


class DailyMeasurementsViewSet(mixins.CreateModelMixin,
                               mixins.ListModelMixin,
                               viewsets.GenericViewSet):
    queryset = DailyMeasurements.objects.all().order_by('-date_created')
    serializer_class = DailyMeasurementsSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        if self.request.query_params.get('show-all') and self.request.user.is_superuser:
            return queryset

        return queryset.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
