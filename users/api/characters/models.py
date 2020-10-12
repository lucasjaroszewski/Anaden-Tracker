from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

class Character_Skill(models.Model):
    name = models.CharField(max_length=30, default='none')
    element = models.CharField(max_length=10, default='')
    type = models.CharField(max_length=10, default='')
    multiplier = models.PositiveIntegerField(default='0')
    hits = models.PositiveIntegerField(default='0')
    stacks = models.PositiveIntegerField(default='0')

    def __str__(self):
        return f'{self.id} - {self.name}'

class Character_Grasta(models.Model):
    name = models.CharField(max_length=30, default='none')
    type = models.CharField(max_length=10, default='')
    eb = models.PositiveIntegerField(default='0')
    nb = models.PositiveIntegerField(default='0')
    hp = models.IntegerField(default='0')
    mp = models.IntegerField(default='0')
    pwr = models.IntegerField(default='0')
    int = models.IntegerField(default='0')
    end = models.IntegerField(default='0')
    spr = models.IntegerField(default='0')
    spd = models.IntegerField(default='0')
    lck = models.IntegerField(default='0')

    def __str__(self):
        return f'{self.id} - {self.name}'

class Character_Weapon(models.Model):
    name = models.CharField(max_length=30, default='', blank=True)
    type = models.CharField(max_length=10, default='', blank=True)
    atk = models.PositiveIntegerField(default='0')
    mat = models.PositiveIntegerField(default='0')
    eb = models.PositiveIntegerField(default='0')
    nb = models.PositiveIntegerField(default='0')
    mod1 = models.PositiveIntegerField(default='0')
    mod2 = models.PositiveIntegerField(default='0')
    hp = models.IntegerField(default='0')
    mp = models.IntegerField(default='0')
    pwr = models.IntegerField(default='0')
    int = models.IntegerField(default='0')
    end = models.IntegerField(default='0')
    spr = models.IntegerField(default='0')
    spd = models.IntegerField(default='0')
    lck = models.IntegerField(default='0')

    def __str__(self):
        return f'{self.id} - {self.name}'

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
    badge = models.CharField(max_length=3, default='')
    badge_pwr = models.PositiveIntegerField(default='0', validators=[MinValueValidator(0), MaxValueValidator(35)])
    badge_spd = models.PositiveIntegerField(default='0', validators=[MinValueValidator(0), MaxValueValidator(35)])
    badge_int = models.PositiveIntegerField(default='0', validators=[MinValueValidator(0), MaxValueValidator(35)])

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
    grasta_1 = models.ForeignKey(Character_Grasta, default=1, on_delete=models.CASCADE, related_name='grasta_1')
    grasta_2 = models.ForeignKey(Character_Grasta, default=1, on_delete=models.CASCADE, related_name='grasta_2')
    grasta_3 = models.ForeignKey(Character_Grasta, default=1, on_delete=models.CASCADE, related_name='grasta_3')
    grasta_4 = models.ForeignKey(Character_Grasta, default=1, on_delete=models.CASCADE, related_name='grasta_4')
    skill_1 = models.ForeignKey(Character_Skill, default=1, on_delete=models.CASCADE, related_name='skill_1')
    skill_2 = models.ForeignKey(Character_Skill, default=1, on_delete=models.CASCADE, related_name='skill_2')
    skill_3 = models.ForeignKey(Character_Skill, default=1, on_delete=models.CASCADE, related_name='skill_3')


    def save(self, *args, **kwargs):
        super(Character, self).save(*args, **kwargs)

    def __str__(self):
        return f'User: {self.user} ({self.user.id}) - {self.name}'
