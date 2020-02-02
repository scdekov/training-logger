# Generated by Django 2.2.5 on 2020-01-25 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('training_logger', '0009_auto_20200125_1902'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='measurement',
            field=models.CharField(choices=[('grams', 'grams'), ('liters', 'liters'), ('servings', 'servings')], default='grams', max_length=128),
            preserve_default=False,
        ),
    ]