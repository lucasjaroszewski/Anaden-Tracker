# Generated by Django 3.1.2 on 2021-08-02 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0006_character_full_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='full_name',
        ),
        migrations.AddField(
            model_name='character',
            name='fullname',
            field=models.CharField(default='', help_text='Example: Aldo (Another Style)', max_length=255, unique=True),
        ),
    ]
