# Generated by Django 3.0.6 on 2020-07-29 17:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0005_auto_20200727_1758'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fish',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('combat', models.PositiveIntegerField(default=10)),
                ('defense', models.PositiveIntegerField(default=10)),
                ('agility', models.PositiveIntegerField(default=10)),
                ('constitution', models.PositiveIntegerField(default=10)),
                ('inteligence', models.PositiveIntegerField(default=10)),
                ('fish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Hero',
        ),
    ]
