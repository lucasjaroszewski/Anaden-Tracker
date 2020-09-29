from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

class Character_Weapon(models.Model):
    wpn_name = models.CharField(max_length=30, default='', blank=True)
    wpn_type = models.CharField(max_length=10, default='', blank=True)
    wpn_atk = models.PositiveIntegerField(default='0')
    wpn_mat = models.PositiveIntegerField(default='0')
    wpn_eb = models.PositiveIntegerField(default='0')
    wpn_nb = models.PositiveIntegerField(default='0')
    wpn_mod1 = models.PositiveIntegerField(default='0')
    wpn_mod2 = models.PositiveIntegerField(default='0')
    wpn_hp = models.PositiveIntegerField(default='0')
    wpn_mp = models.PositiveIntegerField(default='0')
    wpn_pwr = models.PositiveIntegerField(default='0')
    wpn_int = models.PositiveIntegerField(default='0')
    wpn_end = models.PositiveIntegerField(default='0')
    wpn_spr = models.PositiveIntegerField(default='0')
    wpn_spd = models.PositiveIntegerField(default='0')
    wpn_lck = models.PositiveIntegerField(default='0')

    def __str__(self):
        return f'{self.id} - {self.wpn_name}'

class Character(models.Model):
    # User authentication
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='characters')

    # General information
    name = models.CharField(max_length=30, default='')
    lv = models.PositiveIntegerField(default='1', validators=[MinValueValidator(1), MaxValueValidator(80)])
    rarity = models.PositiveIntegerField(default='1')
    element = models.CharField(max_length=10, default='')
    ls_type = models.CharField(max_length=6, default='')
    ls_count = models.PositiveIntegerField(default='0', validators=[MinValueValidator(0), MaxValueValidator(255)])
    another_style = models.BooleanField(default=False)
    attack_type = models.CharField(max_length=10, default='')
    weapon_type = models.CharField(max_length=10, default='')
    accessory_type = models.CharField(max_length=10, default='')
    manifest = models.BooleanField(default=False)
    manifest_lvl = models.PositiveIntegerField(default='1', validators=[MinValueValidator(1), MaxValueValidator(10)])

    # Characters' stats
    hp = models.PositiveIntegerField(default='1')
    hp_l = models.FloatField(default='1')
    mp = models.PositiveIntegerField(default='1')
    mp_l = models.FloatField(default='1')
    pwr = models.PositiveIntegerField(default='1')
    pwr_l = models.FloatField(default='1')
    int = models.PositiveIntegerField(default='1')
    int_l = models.FloatField(default='1')
    end = models.PositiveIntegerField(default='1')
    end_l = models.FloatField(default='1')
    spr = models.PositiveIntegerField(default='1')
    spr_l = models.FloatField(default='1')
    spd = models.PositiveIntegerField(default='1')
    spd_l = models.FloatField(default='1')
    lck = models.PositiveIntegerField(default='1')
    lck_l = models.FloatField(default='1')

    # Guiding Light / Shadow stats

    gn_1 = models.CharField(max_length=5, default='', blank=True)
    gl_1 = models.PositiveIntegerField(default='0')
    gn_2 = models.CharField(max_length=5, default='', blank=True)
    gl_2 = models.PositiveIntegerField(default='0')
    gn_3 = models.CharField(max_length=5, default='', blank=True)
    gl_3 = models.PositiveIntegerField(default='0')
    gn_4 = models.CharField(max_length=5, default='', blank=True)
    gl_4 = models.PositiveIntegerField(default='0')
    gn_5 = models.CharField(max_length=5, default='', blank=True)
    gl_5 = models.PositiveIntegerField(default='0')
    gn_6 = models.CharField(max_length=5, default='', blank=True)
    gl_6 = models.PositiveIntegerField(default='0')
    gn_7 = models.CharField(max_length=5, default='', blank=True)
    gl_7 = models.PositiveIntegerField(default='0')
    gn_8 = models.CharField(max_length=5, default='', blank=True)
    gl_8 = models.PositiveIntegerField(default='0')
    gn_9 = models.CharField(max_length=5, default='', blank=True)
    gl_9 = models.PositiveIntegerField(default='0')
    gn_10 = models.CharField(max_length=5, default='', blank=True)
    gl_10 = models.PositiveIntegerField(default='0')

    # Dungeon information

    dgn_name = models.CharField(max_length=30, default='', blank=True)

    # Foreign Keys
    weapon = models.ForeignKey(Character_Weapon, on_delete=models.CASCADE, related_name='weapon')

    def save(self, *args, **kwargs):
        super(Character, self).save(*args, **kwargs)

    def __str__(self):
        return f'User: {self.user} ({self.user.id}) - {self.name}'
