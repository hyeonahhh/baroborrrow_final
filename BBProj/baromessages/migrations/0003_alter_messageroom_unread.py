# Generated by Django 4.1 on 2022-12-21 23:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baromessages', '0002_messageroom_status_alter_messageroom_last_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messageroom',
            name='unread',
            field=models.IntegerField(default=0),
        ),
    ]
