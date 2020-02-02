from rest_framework.generics import GenericAPIView
from rest_framework import serializers, viewsets

from weasyprint import HTML

from django.template.loader import render_to_string
from django.http import HttpResponse

from training_logger.models import Food, NutritionPlanState


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
        if request.data.get('calories_intake') and request.data.get('fat') and\
                request.data.get('protein') and request.data.get('carbs'):
            NutritionPlanState.objects.create(
                calories=float(request.data.get('calories_intake')),
                fat=float(request.data.get('fat')),
                carbs=float(request.data.get('carbs')),
                protein=float(request.data.get('protein')),
                state=request.data.get('raw_days')
            )

        self._create_foods(request.data)
        rendered = render_to_string('plans/hranitelen_plan.html', request.data)
        pdf = HTML(string=rendered).write_pdf()

        response = HttpResponse(pdf, content_type='application/pdf;')
        response['Content-Disposition'] = 'inline; filename=hranitelen_plan.pdf'
        response['Content-Transfer-Encoding'] = 'binary'
        return response

    def _create_foods(self, data):
        new_foods = {}
        for day in data.get('nutrition_days'):
            for meal in day['meals']:
                for option in meal:
                    for food in option:
                        new_foods[food['name']] = food

        if new_foods:
            for new_food in new_foods.values():
                Food.objects.get_or_create(
                    name=new_food['name'],
                    calories=new_food['calories'],
                    fat=new_food['fat'],
                    carbs=new_food['carbs'],
                    protein=new_food['protein'],
                    measurement=new_food['measurement'],
                    default_quantity=new_food['default_quantity'],
                    note=new_food.get('note', '')
                )


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'


class FoodViewSet(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()


class NutritionPlanStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = NutritionPlanState
        fields = '__all__'


class NutritionPlanStatesViewSet(viewsets.ModelViewSet):
    serializer_class = NutritionPlanStateSerializer
    queryset = NutritionPlanState.objects.all()
