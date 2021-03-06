# Generated by Django 3.0.6 on 2020-08-03 20:39

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0010_profile_rod'),
    ]

    operations = [
        migrations.CreateModel(
            name='FishX',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.PositiveIntegerField(default='0')),
                ('description', models.CharField(blank=True, default='M', max_length=1)),
                ('name', models.CharField(default='', max_length=30)),
                ('hook', models.CharField(default='S', max_length=1)),
                ('actual_catch', models.PositiveIntegerField(default='0')),
                ('stones', models.PositiveIntegerField(default='20')),
                ('rod', models.PositiveIntegerField(default='0')),
                ('bait', models.CharField(default='', max_length=30)),
                ('reel', models.CharField(default='', max_length=20)),
                ('xp', models.PositiveIntegerField(default='0')),
                ('icon', models.ImageField(default='default.jpg', upload_to='media/fish_pics')),
                ('lake_tiilen', models.BooleanField(default=False)),
                ('dragon_palace', models.BooleanField(default=False)),
                ('acteul', models.BooleanField(default=False)),
                ('vasu_mointains', models.BooleanField(default=False)),
                ('charol_plains', models.BooleanField(default=False)),
                ('man_eating_swamp', models.BooleanField(default=False)),
                ('baruoki', models.BooleanField(default=False)),
                ('nauru_uplands', models.BooleanField(default=False)),
                ('karek_swampland', models.BooleanField(default=False)),
                ('rinde_port', models.BooleanField(default=False)),
                ('serena_coast', models.BooleanField(default=False)),
                ('rucyana_sands', models.BooleanField(default=False)),
                ('elzion_airport', models.BooleanField(default=False)),
                ('nilva', models.BooleanField(default=False)),
                ('last_island', models.BooleanField(default=False)),
                ('dimension_rift', models.BooleanField(default=False)),
                ('zol_plains', models.BooleanField(default=False)),
                ('moonlight_forest', models.BooleanField(default=False)),
                ('snake_neck_igoma', models.BooleanField(default=False)),
                ('ancient_battlefield', models.BooleanField(default=False)),
                ('user', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
