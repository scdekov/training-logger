from django.urls import path, include


urlpatterns = [
    path('', include('training_logger.urls')),
]
