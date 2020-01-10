from rest_framework.views import APIView
from rest_framework import serializers, status, viewsets, mixins, decorators
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
    class  Meta:
        model = LogRecord
        fields = ('id', 'excercise', 'excercise_name', 'is_warmup', 'reps',
                  'time_length', 'weight', 'notes', 'date_created')

    excercise_name = serializers.SerializerMethodField()

    def get_excercise_name(self, instance):
        return instance.excercise.name


class LogRecordViewSet(mixins.ListModelMixin,
                       viewsets.GenericViewSet):
    queryset = LogRecord.objects.all()
    serializer_class = LogRecordSerializer

    def get_queryset(self):
        return super().get_queryset().prefetch_related('excercise')

    def create(self, request):
        excercise = Excercise.objects.get_or_create(name=request.data.get('name'))[0]
        LogRecord.objects.create(
            excercise=excercise,
            is_warmup=request.data.get('is_warmup', False),
            reps=request.data.get('reps') or None,
            time_length=request.data.get('time_length') or None,
            weight=request.data.get('weight') or None,
            notes=request.data.get('notes', '')
        )
        return Response(status=201)


class DailyMeasurementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyMeasurements
        fields = '__all__'


class DailyMeasurementsViewSet(mixins.CreateModelMixin,
                               mixins.ListModelMixin,
                               viewsets.GenericViewSet):
    queryset = DailyMeasurements.objects.all()
    serializer_class = DailyMeasurementsSerializer
