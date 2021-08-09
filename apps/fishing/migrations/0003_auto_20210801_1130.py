# Generated by Django 3.1.2 on 2021-08-01 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fishing', '0002_auto_20210731_1407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fish',
            name='name',
            field=models.CharField(default='', max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='loot',
            name='loot',
            field=models.CharField(blank=True, default='', max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='weapon',
            name='weapon',
            field=models.CharField(blank=True, default='', max_length=30, unique=True),
        ),
    ]
