# Generated by Django 3.1.2 on 2021-07-31 01:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0039_auto_20210730_2048'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fish',
            name='loot',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='user',
        ),
        migrations.RemoveField(
            model_name='fish',
            name='weapon',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='user',
        ),
        migrations.DeleteModel(
            name='Character',
        ),
        migrations.DeleteModel(
            name='Character_Grasta',
        ),
        migrations.DeleteModel(
            name='Character_Skill',
        ),
        migrations.DeleteModel(
            name='Character_Weapon',
        ),
        migrations.DeleteModel(
            name='Fish',
        ),
        migrations.DeleteModel(
            name='Loot',
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
        migrations.DeleteModel(
            name='Weapon',
        ),
    ]
