from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

from shortuuid.django_fields import ShortUUIDField
from django.utils import timezone


class UserType(models.TextChoices):
    PLAYER = "Player", "Player"
    MANAGER = "Manager", "Manager"


class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    otp = models.CharField(max_length=100, null=True, blank=True)
    reset_token = models.CharField(max_length=1000, null=True, blank=True)

    def is_player(self):
        return self.usertype == UserType.PLAYER

    def is_manager(self):
        return self.usertype == UserType.MANAGER

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email

    def __unicode__(self):
        return self.username

    def save(self, *args, **kwargs):
        email_username, mobile = self.email.split("@")
        if self.full_name == "" or self.full_name == None:
            self.full_name = email_username
        if self.username == "" or self.username == None:
            self.username = email_username

        super(User, self).save(*args, **kwargs)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.FileField(
        upload_to="image", default="default/default-user.jpg", null=True
    )
    full_name = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=100, null=True)
    city = models.CharField(max_length=100, null=True)
    date = models.DateTimeField(auto_now_add=True)
    usertype = models.CharField(
        max_length=10, choices=UserType.choices, default=UserType.PLAYER
    )
    createdAt = models.DateTimeField(default=timezone.now)
    age = models.PositiveIntegerField(default=18)
    position = models.CharField(max_length=50, default="Employee")
    height_cm = models.IntegerField(default=170)
    strong_foot = models.CharField(
        max_length=10,
        choices=[("left", "Left"), ("right", "Right")],
        default="Right",
    )
    profile_picture = models.ImageField(upload_to="profiles/", blank=True, null=True)
    pid = ShortUUIDField(unique=True, length=10, max_length=10, alphabet="abcdefghijkl")

    def __str__(self):
        if self.full_name:
            return str(self.full_name)
        else:
            return str(self.user.full_name)

    def save(self, *args, **kwargs):
        if self.full_name == "" or self.full_name == None:
            self.full_name = self.user.full_name

        super(Profile, self).save(*args, **kwargs)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)
