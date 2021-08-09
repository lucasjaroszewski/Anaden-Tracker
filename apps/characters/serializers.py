from rest_framework import serializers
from django.contrib.auth.models import User
from apps.characters.models import Character, Weapon

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character
        fields = '__all__'

class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Weapon
        fields = '__all__'
