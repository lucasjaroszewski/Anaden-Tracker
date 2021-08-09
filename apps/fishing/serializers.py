from rest_framework import serializers
from django.contrib.auth.models import User
from apps.fishing.models import Fish, Weapon, Loot

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class FishSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fish
        fields = '__all__'

class WeaponSerializer(serializers.ModelSerializer):

    class Meta:
        model = Weapon
        fields = '__all__'

class LootSerializer(serializers.ModelSerializer):

    class Meta:
        model = Loot
        fields = '__all__'
