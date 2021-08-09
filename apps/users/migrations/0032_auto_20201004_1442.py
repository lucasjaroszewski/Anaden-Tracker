# Generated by Django 3.0.6 on 2020-10-04 17:42

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0031_character_badge'),
    ]

    operations = [
        migrations.CreateModel(
            name='Character_Grasta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='none', max_length=30)),
                ('type', models.CharField(blank=True, default='', max_length=30)),
                ('eb', models.PositiveIntegerField(default='0')),
                ('nb', models.PositiveIntegerField(default='0')),
                ('hp', models.IntegerField(default='0')),
                ('mp', models.IntegerField(default='0')),
                ('pwr', models.IntegerField(default='0')),
                ('int', models.IntegerField(default='0')),
                ('end', models.IntegerField(default='0')),
                ('spr', models.IntegerField(default='0')),
                ('spd', models.IntegerField(default='0')),
                ('lck', models.IntegerField(default='0')),
            ],
        ),
        migrations.AddField(
            model_name='character',
            name='badge_int',
            field=models.PositiveIntegerField(default='0', validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(35)]),
        ),
    ]
