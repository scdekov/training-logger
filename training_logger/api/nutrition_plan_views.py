import tempfile

from rest_framework.generics import GenericAPIView
from rest_framework import serializers

from weasyprint import HTML

from django.template.loader import render_to_string
from django.http import HttpResponse


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
