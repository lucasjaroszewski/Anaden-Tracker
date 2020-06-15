from django.db import models
from django.contrib.auth.models import User
from PIL import Image

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'

    def save(self, *args, **kwargs):
        super(Profile, self).save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)

class Hero(models.Model):
    hero = models.OneToOneField(User, on_delete=models.CASCADE)
    combat = models.PositiveIntegerField()
    defense = models.PositiveIntegerField()
    agility = models.PositiveIntegerField()
    constitution = models.PositiveIntegerField()
    inteligence = models.PositiveIntegerField()

    def save(self, *args, **kwargs):
        super(Hero, self).save(*args, **kwargs)
