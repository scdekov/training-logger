# Generated by Django 2.2.5 on 2020-01-25 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('training_logger', '0008_food_nutritionplan'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='carbs',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='food',
            name='fat',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='food',
            name='protein',
            field=models.FloatField(),
        ),
    ]
