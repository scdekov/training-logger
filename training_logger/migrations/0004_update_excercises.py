from django.db import migrations


EXCERCISES = ['Squat',
'Leg press',
'Lunge',
'Deadlift',
'Leg extension',
'Leg curl',
'Standing calf raise',
'Seated calf raise',
'Hip adductor',
'Bench press',
'Chest fly',
'Push-up',
'Pulldown exercise',
'Pull-up exercise',
'Bent-over row',
'Upright row',
'Shoulder press',
'Shoulder fly',
'Lateral raise',
'Shoulder shrug',
'Pushdown',
'Triceps extension',
'Biceps curl',
'Crunch',
'Russian twist',
'Leg raise',
'Back extension'
]


def create_excercises(apps, schema_editor):
    Excercise = apps.get_model('training_logger', 'Excercise')
    Excercise.objects.all().delete()
    excercises = [Excercise(name=e) for e in EXCERCISES]
    Excercise.objects.bulk_create(excercises)

class Migration(migrations.Migration):

    dependencies = [
        ('training_logger', '0003_dailymeasurements_date_created'),
    ]

    operations = [
        migrations.RunPython(create_excercises),
    ]
