from django.db import models


class Friend(models.Model):

    # General information
    name = models.CharField(max_length=255, unique=True, default='', help_text='Example: Hungry Professor')
    location_rank_up = models.CharField(max_length=255, default='', help_text='Example: Port Bazaar')
    location_in_game = models.CharField(max_length=255, default='', help_text='Example: Tavern')
    lezona_floor = models.CharField(max_length=255, default='', help_text='Example: 2F')
    classe = models.CharField(max_length=255, default='', help_text='Example: Sorcerer')
    rank_two = models.CharField(max_length=255, default='', help_text='Example: 1000')
    rank_three = models.CharField(max_length=255, default='', help_text='Example: 5000')
    rank_four = models.CharField(max_length=255, default='', help_text='Example: N.A.')

    def save(self, *args, **kwargs):
        super(Friend, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.name}'
