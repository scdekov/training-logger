from rest_framework.generics import GenericAPIView
from rest_framework import serializers, viewsets

from weasyprint import HTML

from django.template.loader import render_to_string
from django.http import HttpResponse

from training_logger.models import Food


class NutritionPlanSerializer(serializers.Serializer):
    name = serializers.CharField()
    age = serializers.CharField()
    weight = serializers.CharField()
    chest = serializers.CharField()
    hips = serializers.CharField()
    waist = serializers.CharField()
    goal = serializers.CharField()
    calories_intake = serializers.CharField()
    protein = serializers.CharField()
    carbs = serializers.CharField()
    fat = serializers.CharField()


class NutritionPlanView(GenericAPIView):
    serializer_class = NutritionPlanSerializer

    def post(self, request):
        rendered = render_to_string('plans/hranitelen_plan.html', request.data)
        pdf = HTML(string=rendered).write_pdf()

        response = HttpResponse(pdf, content_type='application/pdf;')
        response['Content-Disposition'] = 'inline; filename=hranitelen_plan.pdf'
        response['Content-Transfer-Encoding'] = 'binary'
        return response


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'


class FoodViewSet(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()
