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
    weight = models.FloatField()
    last_night_sleep_hours = models.IntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

