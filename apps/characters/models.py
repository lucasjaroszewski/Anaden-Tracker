from django.db import models
from django.contrib.auth.models import User


class Character(models.Model):

    # General Information
    fullname = models.CharField(max_length=255, unique=True, default='', help_text='Example: Aldo (Another Style)')
    name = models.CharField(max_length=255, default='', help_text='Example: Aldo')
    lv = models.PositiveIntegerField(default='1', help_text='Example: 1')
    icon = models.CharField(max_length=255, default='', help_text='Icon URL')
    image = models.CharField(max_length=255, default='', help_text='Image URL')
    rarity = models.CharField(max_length=255, default='3', help_text='Example: 3 (AS for Another Style and ES for Extra Style)')
    element = models.CharField(max_length=255, default='', help_text='Example: Fire')
    attack_type = models.CharField(max_length=255, default='', help_text='Example: Slash')
    weapon_type = models.CharField(max_length=255, default='', help_text='Example: Sword')
    accessory_type = models.CharField(max_length=255, default='', help_text='Example: Bangle')
    ls_type = models.CharField(max_length=255, default='', help_text='Example: Light')
    ls_count = models.PositiveIntegerField(default='0', help_text='Example: 0')
    personality = models.CharField(max_length=255, default='', help_text='Example: Protagonist, Guiding Light, Forager, Sword, Dragon, Baruoki')
    dungeon = models.CharField(max_length=255, default='', help_text='Example:  Miglance Castle')
    date_added = models.DateTimeField(auto_now_add=True)

    # Stats Data
    hp = models.CharField(max_length=255, default='', help_text='Example: 3444')
    mp = models.CharField(max_length=255, default='', help_text='Example: 413')
    pwr = models.CharField(max_length=255, default='', help_text='Example: 223')
    int = models.CharField(max_length=255, default='', help_text='Example: 151')
    end = models.CharField(max_length=255, default='', help_text='Example: 194')
    spr = models.CharField(max_length=255, default='', help_text='Example: 166')
    spd = models.CharField(max_length=255, default='', help_text='Example: 179')
    lck = models.CharField(max_length=255, default='', help_text='Example: 188')

    # Light Stat Bonuses
    bonus1 = models.CharField(max_length=255, default='', help_text='Example: SPD +5')
    bonus2 = models.CharField(max_length=255, default='', help_text='Example: END +10')
    bonus3 = models.CharField(max_length=255, default='', help_text='Example: HP +200')
    bonus4 = models.CharField(max_length=255, default='', help_text='Example: LCK +15')
    bonus5 = models.CharField(max_length=255, default='', help_text='Example: PWR +15')
    bonus6 = models.CharField(max_length=255, default='', help_text='Example: SPD +20')
    bonus7 = models.CharField(max_length=255, default='', help_text='Example: END +20')
    bonus8 = models.CharField(max_length=255, default='', help_text='Example: HP +400')
    bonus9 = models.CharField(max_length=255, default='', help_text='Example: LCK +25')
    bonus10 = models.CharField(max_length=255, default='', help_text='Example: PWR +30')

    # Skills
    skill1 = models.CharField(max_length=255, default='', help_text='Example: Spinning Slash')
    skill2 = models.CharField(max_length=255, default='', help_text='Example: Fire Slash')
    skill3 = models.CharField(max_length=255, default='', help_text='Example: Swift Cut')
    skill4 = models.CharField(max_length=255, default='', help_text='Example: Blaze Sword')
    skill5 = models.CharField(max_length=255, default='', help_text='Example: Volcano Blade')
    skill6 = models.CharField(max_length=255, default='', help_text='Example: X Slash')
    skill7 = models.CharField(max_length=255, default='', help_text='Example: Dragon God Slash')
    skill8 = models.CharField(max_length=255, default='', help_text='Example: X Slash Mk II')

    # Mods
    mod1 = models.CharField(max_length=255, default='', help_text='Example: 110')
    mod2 = models.CharField(max_length=255, default='', help_text='Example: 140')
    mod3 = models.CharField(max_length=255, default='', help_text='Example: 150')
    mod4 = models.CharField(max_length=255, default='', help_text='Example: 160')
    mod5 = models.CharField(max_length=255, default='', help_text='Example: 180')
    mod6 = models.CharField(max_length=255, default='', help_text='Example: 150')
    mod7 = models.CharField(max_length=255, default='', help_text='Example: 210')
    mod8 = models.CharField(max_length=255, default='', help_text='Example: 160')

    class Meta:
        ordering = ('-date_added', )

    def save(self, *args, **kwargs):
        super(Character, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.fullname}'


class Weapon(models.Model):

    # General information
    name = models.CharField(max_length=255, unique=True, default='', help_text='Example: Wisdom Ax')
    category = models.CharField(max_length=255, default='', help_text='Example: Ax')
    icon = models.CharField(max_length=255, default='', help_text='Icon URL')
    atk = models.CharField(max_length=255, default='', help_text='167')
    matk = models.CharField(max_length=255, default='', help_text='133')
    date_added = models.DateTimeField(auto_now_add=True)

    # Stats gain and loss
    hp_gain = models.CharField(max_length=255, default='0', help_text='0')
    mp_gain = models.CharField(max_length=255, default='0', help_text='0')
    pwr_gain = models.CharField(max_length=255, default='0', help_text='0')
    int_gain = models.CharField(max_length=255, default='0', help_text='0')
    spr_gain = models.CharField(max_length=255, default='0', help_text='30')
    end_gain = models.CharField(max_length=255, default='0', help_text='0')
    spd_gain = models.CharField(max_length=255, default='0', help_text='0')
    spd_loss = models.CharField(max_length=255, default='0', help_text='0')
    lck_gain = models.CharField(max_length=255, default='0', help_text='0')
    elemental_type = models.CharField(max_length=255, default='0', help_text='0')
    non_type = models.CharField(max_length=255, default='0', help_text='0')
    damage_plus = models.CharField(max_length=255, default='0', help_text='0')

    class Meta:
        ordering = ('-date_added', )

    def save(self, *args, **kwargs):
        super(Weapon, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.name}'
