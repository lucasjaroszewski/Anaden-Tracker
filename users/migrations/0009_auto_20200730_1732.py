# Generated by Django 3.0.6 on 2020-07-30 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_auto_20200730_1452'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fish',
            name='description',
            field=models.CharField(blank=True, default='M', max_length=1),
        ),
    ]
