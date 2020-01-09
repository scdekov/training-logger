from rest_framework.routers import DefaultRouter

from django.urls import path

from training_logger.api.views import ExcerciseView, LogRecordViewSet, DailyMeasurementsViewSet


router = DefaultRouter()
router.register(r'log-records', LogRecordViewSet, basename='log_records')
router.register(r'daily-measurements', DailyMeasurementsViewSet, basename='daily_measurements')


urlpatterns = [
    path('excercises/', ExcerciseView.as_view(), name='excercises'),
] + router.urls

