# Generated by Django 3.1.2 on 2021-08-06 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0013_auto_20210805_2153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weapon',
            name='name',
            field=models.CharField(default='', help_text='Example: Wisdom Ax', max_length=255, unique=True),
        ),
    ]
