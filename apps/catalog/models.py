from django.db import models


class Cat(models.Model):

    # General information
    name = models.CharField(max_length=255, unique=True, default='', help_text='Example: Peasuke')
    icon = models.CharField(max_length=255, default='', help_text='URL')
    location = models.CharField(max_length=255, default='', help_text='Example: Baruoki - South')
    liked_gifts = models.CharField(max_length=255, default='', help_text='Example: Decent Small Fish, Cute Butterfly')
    loved_gifts = models.CharField(max_length=255, default='', help_text='Example: Yummy Small Fish, Winged Fish')
    personality = models.CharField(max_length=255, default='', help_text='Example: Docile')
    common_gift = models.CharField(max_length=255, default='', help_text='Example: Catgrass')
    common_icon = models.CharField(max_length=255, default='', help_text='URL')
    unique_gift = models.CharField(max_length=255, default='', help_text='Example: Cats-eye')
    unique_icon = models.CharField(max_length=255, default='', help_text='URL')
    date_added = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        super(Cat, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.name}'
