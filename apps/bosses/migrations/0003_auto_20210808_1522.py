# Generated by Django 3.1.2 on 2021-08-08 18:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('bosses', '0002_auto_20210730_2113'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bossnulify',
            name='boss',
        ),
        migrations.RemoveField(
            model_name='bossresist',
            name='boss',
        ),
        migrations.RemoveField(
            model_name='bossweakness',
            name='boss',
        ),
        migrations.AlterModelOptions(
            name='boss',
            options={},
        ),
        migrations.RemoveField(
            model_name='boss',
            name='reward',
        ),
        migrations.RemoveField(
            model_name='boss',
            name='user',
        ),
        migrations.AddField(
            model_name='boss',
            name='absorbs',
            field=models.CharField(default='', help_text='None', max_length=255),
        ),
        migrations.AddField(
            model_name='boss',
            name='date_added',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='boss',
            name='loot',
            field=models.CharField(default='', help_text='Dark Spirit Katana', max_length=255),
        ),
        migrations.AddField(
            model_name='boss',
            name='nullifies',
            field=models.CharField(default='', help_text='Earth', max_length=255),
        ),
        migrations.AddField(
            model_name='boss',
            name='resists',
            field=models.CharField(default='', help_text='Fire, Water', max_length=255),
        ),
        migrations.AddField(
            model_name='boss',
            name='weakness',
            field=models.CharField(default='', help_text='None', max_length=255),
        ),
        migrations.AlterField(
            model_name='boss',
            name='location',
            field=models.CharField(default='', help_text='Example: Temple Ruins', max_length=255),
        ),
        migrations.AlterField(
            model_name='boss',
            name='name',
            field=models.CharField(default='', help_text='Example: One Wheel', max_length=255, unique=True),
        ),
        migrations.DeleteModel(
            name='BossAbsorb',
        ),
        migrations.DeleteModel(
            name='BossNulify',
        ),
        migrations.DeleteModel(
            name='BossResist',
        ),
        migrations.DeleteModel(
            name='BossWeakness',
        ),
    ]
