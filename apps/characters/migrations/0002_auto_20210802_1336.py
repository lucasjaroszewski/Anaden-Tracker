# Generated by Django 3.1.2 on 2021-08-02 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='another_style',
        ),
        migrations.AddField(
            model_name='character',
            name='bonus1',
            field=models.CharField(default='', help_text='Example: SPD +5', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus10',
            field=models.CharField(default='', help_text='Example: PWR +30', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus2',
            field=models.CharField(default='', help_text='Example: END +10', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus3',
            field=models.CharField(default='', help_text='Example: HP +200', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus4',
            field=models.CharField(default='', help_text='Example: LCK +15', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus5',
            field=models.CharField(default='', help_text='Example: PWR +15', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus6',
            field=models.CharField(default='', help_text='Example: SPD +20', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus7',
            field=models.CharField(default='', help_text='Example: END +20', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus8',
            field=models.CharField(default='', help_text='Example: HP +400', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='bonus9',
            field=models.CharField(default='', help_text='Example: LCK +25', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='end',
            field=models.CharField(default='', help_text='Example: 194', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='hp',
            field=models.CharField(default='', help_text='Example: 3444', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='int',
            field=models.CharField(default='', help_text='Example: 151', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='lck',
            field=models.CharField(default='', help_text='Example: 188', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mod1',
            field=models.CharField(default='', help_text='Example: 110', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mod2',
            field=models.CharField(default='', help_text='Example: 140', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mod3',
            field=models.CharField(default='', help_text='Example: 150', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mod4',
            field=models.CharField(default='', help_text='Example: 160', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mod5',
            field=models.CharField(default='', help_text='Example: 180', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mod6',
            field=models.CharField(default='', help_text='Example: 150', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mod7',
            field=models.CharField(default='', help_text='Example: 210', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mod8',
            field=models.CharField(default='', help_text='Example: 160', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='mp',
            field=models.CharField(default='', help_text='Example: 413', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='number',
            field=models.CharField(default='', help_text='Incremental', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='pwr',
            field=models.CharField(default='', help_text='Example: 223', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='skill1',
            field=models.CharField(default='', help_text='Example: Spinning Slash', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='skill2',
            field=models.CharField(default='', help_text='Example: Fire Slash', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='skill3',
            field=models.CharField(default='', help_text='Example: Swift Cut', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='skill4',
            field=models.CharField(default='', help_text='Example: Blaze Sword', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='skill5',
            field=models.CharField(default='', help_text='Example: Volcano Blade', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='skill6',
            field=models.CharField(default='', help_text='Example: X Slash', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='skill7',
            field=models.CharField(default='', help_text='Example: Dragon God Slash', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='skill8',
            field=models.CharField(default='', help_text='Example: X Slash Mk II', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='spd',
            field=models.CharField(default='', help_text='Example: 179', max_length=255),
        ),
        migrations.AddField(
            model_name='character',
            name='spr',
            field=models.CharField(default='', help_text='Example: 166', max_length=255),
        ),
        migrations.AlterField(
            model_name='character',
            name='accessory_type',
            field=models.CharField(default='', help_text='Example: Bangle', max_length=255),
        ),
        migrations.AlterField(
            model_name='character',
            name='attack_type',
            field=models.CharField(default='', help_text='Example: Slash', max_length=255),
        ),
        migrations.AlterField(
            model_name='character',
            name='element',
            field=models.CharField(default='', help_text='Example: Fire', max_length=255),
        ),
        migrations.AlterField(
            model_name='character',
            name='ls_count',
            field=models.PositiveIntegerField(default='', help_text='Example: 0'),
        ),
        migrations.AlterField(
            model_name='character',
            name='ls_type',
            field=models.CharField(default='', help_text='Example: Light', max_length=255),
        ),
        migrations.AlterField(
            model_name='character',
            name='name',
            field=models.CharField(default='', help_text='Example: Aldo', max_length=255),
        ),
        migrations.AlterField(
            model_name='character',
            name='rarity',
            field=models.CharField(default='3', help_text='Example: 3 (AS for Another Style and ES for Extra Style)', max_length=255),
        ),
        migrations.AlterField(
            model_name='character',
            name='weapon_type',
            field=models.CharField(default='', help_text='Example: Sword', max_length=255),
        ),
    ]
