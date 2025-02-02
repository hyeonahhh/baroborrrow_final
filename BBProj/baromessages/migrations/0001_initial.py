
# Generated by Django 4.1 on 2023-03-14 15:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('BBApp', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MessageRoom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unread', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('last_at', models.DateTimeField(auto_now=True, null=True)),
                ('last_message', models.CharField(blank=True, max_length=1000, null=True)),
                ('status', models.BooleanField(default=False)),
                ('member1', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='mycreatemessage', to=settings.AUTH_USER_MODEL)),
                ('member2', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='myproductmessage', to=settings.AUTH_USER_MODEL)),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='BBApp.product')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=1000)),
                ('message_photo', models.ImageField(blank=True, null=True, upload_to='message_photo')),
                ('sender', models.IntegerField()),
                ('send_at', models.DateTimeField(auto_now_add=True)),
                ('room', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='baromessages.messageroom')),
            ],
        ),
    ]
