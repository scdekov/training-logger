# Generated by Django 2.2.5 on 2020-01-26 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('training_logger', '0012_nutritionplanstate'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='note',
            field=models.CharField(default='', max_length=1024),
            preserve_default=False,
        ),
    ]
