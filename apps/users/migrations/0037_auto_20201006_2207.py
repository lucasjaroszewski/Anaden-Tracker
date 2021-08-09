# Generated by Django 3.0.6 on 2020-10-07 01:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0036_character_skill'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='skill_1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='skill_1', to='users.Character_Skill'),
        ),
        migrations.AddField(
            model_name='character',
            name='skill_2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='skill_2', to='users.Character_Skill'),
        ),
        migrations.AddField(
            model_name='character',
            name='skill_3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='skill_3', to='users.Character_Skill'),
        ),
    ]
