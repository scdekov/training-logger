import random

from django.contrib.postgres.fields import ArrayField
from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Excercise(models.Model):
    name = models.CharField(max_length=256, unique=True)
    date_created = models.DateTimeField(auto_now_add=True)


class LogRecord(models.Model):
    excercise = models.ForeignKey(Excercise, on_delete=models.CASCADE)
    is_warmup = models.BooleanField(default=False)
    reps = models.IntegerField(null=True)
    time_length = models.IntegerField(null=True)
    weight = models.IntegerField(null=True)
    notes = models.CharField(max_length=1024, blank=True)
    test_mode = models.BooleanField(default=False)

    date_created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class DailyMeasurements(models.Model):
    weight = models.FloatField(null=True)
    last_night_sleep_hours = models.IntegerField(null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class NutritionPlan(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)


class Food(models.Model):
    MEASUREMENTS = [('grams', 'grams'), ('liters', 'liters'), ('servings', 'servings')]

    name = models.CharField(max_length=256, unique=True)
    calories = models.IntegerField()
    fat = models.FloatField()
    carbs = models.FloatField()
    protein = models.FloatField()
    measurement = models.CharField(choices=MEASUREMENTS, max_length=128)
    default_quantity = models.IntegerField()
