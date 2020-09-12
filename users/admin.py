from django.contrib import admin
from users.api.fishing.models import Profile, Fish, Loot, Weapon

admin.site.register(Profile)
admin.site.register(Fish)
admin.site.register(Loot)
admin.site.register(Weapon)
