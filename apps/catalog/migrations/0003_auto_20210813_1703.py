# Generated by Django 3.2.6 on 2021-08-13 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_auto_20210811_0837'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cat',
            name='common_gift',
            field=models.CharField(default='', help_text='Example: Catgrass', max_length=255),
        ),
        migrations.AlterField(
            model_name='cat',
            name='liked_gifts',
            field=models.CharField(default='', help_text='Example: Decent Small Fish, Cute Butterfly', max_length=255),
        ),
        migrations.AlterField(
            model_name='cat',
            name='loved_gifts',
            field=models.CharField(default='', help_text='Example: Yummy Small Fish, Winged Fish', max_length=255),
        ),
        migrations.AlterField(
            model_name='cat',
            name='personality',
            field=models.CharField(default='', help_text='Example: Docile', max_length=255),
        ),
        migrations.AlterField(
            model_name='cat',
            name='unique_gift',
            field=models.CharField(default='', help_text='Example: Cats-eye', max_length=255),
        ),
    ]
