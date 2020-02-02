from rest_framework.routers import DefaultRouter

from django.urls import path

from training_logger.api.views import ExcerciseView, LogRecordViewSet, DailyMeasurementsViewSet
from training_logger.api.nutrition_plan_views import NutritionPlanView, FoodViewSet, NutritionPlanStatesViewSet


router = DefaultRouter()
router.register(r'log-records', LogRecordViewSet, basename='log_records')
router.register(r'daily-measurements', DailyMeasurementsViewSet, basename='daily_measurements')
router.register(r'food', FoodViewSet, basename='food')
router.register(r'nutrition-plan-states', NutritionPlanStatesViewSet, basename='plan_states')


urlpatterns = [
    path('excercises/', ExcerciseView.as_view(), name='excercises'),
    path('nutrition-plans/', NutritionPlanView.as_view(), name='nutrition-plan'),
] + router.urls
