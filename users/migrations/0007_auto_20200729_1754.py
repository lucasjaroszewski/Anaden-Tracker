# Generated by Django 3.0.6 on 2020-07-29 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20200729_1401'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fish',
            old_name='fish',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='agility',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='combat',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='constitution',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='defense',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='inteligence',
        ),
        migrations.AddField(
            model_name='fish',
            name='acteul',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='actual_catch',
            field=models.PositiveIntegerField(default='0'),
        ),
        migrations.AddField(
            model_name='fish',
            name='ancient_battlefield',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='bait',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AddField(
            model_name='fish',
            name='baruoki',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='charol_plains',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='description',
            field=models.CharField(default='M', max_length=1),
        ),
        migrations.AddField(
            model_name='fish',
            name='dimension_rift',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='dragon_palace',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='elzion_airport',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='hook',
            field=models.CharField(default='S', max_length=1),
        ),
        migrations.AddField(
            model_name='fish',
            name='icon',
            field=models.ImageField(default='default.jpg', upload_to='media/fish_pics'),
        ),
        migrations.AddField(
            model_name='fish',
            name='karek_swampland',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='lake_tiilen',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='last_island',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='man_eating_swamp',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='moonlight_forest',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='name',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AddField(
            model_name='fish',
            name='nauru_uplands',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='nilva',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='number',
            field=models.PositiveIntegerField(default='0'),
        ),
        migrations.AddField(
            model_name='fish',
            name='reel',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='fish',
            name='rinde_port',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='rod',
            field=models.PositiveIntegerField(default='0'),
        ),
        migrations.AddField(
            model_name='fish',
            name='rucyana_sands',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='serena_coast',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='snake_neck_igoma',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='stones',
            field=models.PositiveIntegerField(default='20'),
        ),
        migrations.AddField(
            model_name='fish',
            name='vasu_mointains',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='fish',
            name='xp',
            field=models.PositiveIntegerField(default='0'),
        ),
        migrations.AddField(
            model_name='fish',
            name='zol_plains',
            field=models.BooleanField(default=False),
        ),
    ]
