# Generated by Django 3.2.6 on 2021-08-13 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Friend',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', help_text='Example: Peasuke', max_length=255, unique=True)),
                ('location_rank_up', models.CharField(default='', help_text='URL', max_length=255)),
                ('location_in_game', models.CharField(default='', help_text='URL', max_length=255)),
                ('lezona_floor', models.CharField(default='', help_text='Example: Baruoki - South', max_length=255)),
                ('classe', models.CharField(default='', help_text='Decent Small Fish, Cute Butterfly', max_length=255)),
                ('rank_two', models.CharField(default='', help_text='Yummy Small Fish, Winged Fish', max_length=255)),
                ('rank_three', models.CharField(default='', help_text='Docile', max_length=255)),
                ('rank_four', models.CharField(default='', help_text='Catgrass', max_length=255)),
            ],
        ),
    ]
