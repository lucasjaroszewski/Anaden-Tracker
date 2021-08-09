from django.db import models


class Boss(models.Model):

    # General information
    name = models.CharField(max_length=255, unique=True, default='', help_text='Example: One Wheel')
    location = models.CharField(max_length=255, default='', help_text='Example: Temple Ruins')
    weakness = models.CharField(max_length=255, default='', help_text='None')
    resists = models.CharField(max_length=255, default='', help_text='Fire, Water')
    absorbs = models.CharField(max_length=255, default='', help_text='None')
    nullifies = models.CharField(max_length=255, default='', help_text='Earth')
    loot = models.CharField(max_length=255, default='', help_text='Dark Spirit Katana')
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Bosses'

    def save(self, *args, **kwargs):
        super(Boss, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.name}'
