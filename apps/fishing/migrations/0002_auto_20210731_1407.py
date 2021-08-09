# Generated by Django 3.1.2 on 2021-07-31 17:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fishing', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fish',
            old_name='max_points',
            new_name='points',
        ),
        migrations.RenameField(
            model_name='fish',
            old_name='max_size',
            new_name='size',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='c_stones',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='min_points',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='min_size',
        ),
    ]
