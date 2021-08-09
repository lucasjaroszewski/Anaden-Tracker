from models import Fish
from django.contrib.auth.models import User

Fish.objects.bulk_create(
    [
        Fish(
            user="1",
            number="1",
            name="Baruoki Kamasu",
            rod="3",
            bait="Fishing Dango",
            reel="Beginner Reel",
            xp="30",
            rarity="1",
            size="24",
            points="0.8"
        ),

        Fish(
            user="1",
            number="2",
            name="Long Face Mackerel",
            rod="3",
            bait="Fishing Dango",
            reel="Beginner Reel",
            xp="30",
            rarity="1",
            size="32",
            points="1.07"
        )
    ]
)
