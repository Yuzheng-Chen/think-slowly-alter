---
title: What is Fitts' Law? Why is it so important in HCI?
keywords: 
tags:
  - Science
  - HCI
categories:
  - Knowledge
  - HCI
description: 
author: Yuzi
cover: assets/covers/fitts-law.png
thumbnail: assets/covers/fitts-law.png
comments: true
top: 1
copyright: false
date: 2024-10-24 17:17:14
updated: 2024-10-26 00:55:42
math: true
---
## What is Fitts' Law?
****
Fitts' Law comes from [Paul Fitts](https://en.wikipedia.org/wiki/Paul_Fitts), a psychologist and a big deal in human factors (fancy way of saying he studied how people interact with stuff). Back in the 20th century, researchers had some sense of how people perform tasks, but some pretty big questions were still up in the air:

- ==How long== does it actually take to move to a target we can see?
- How do things like ==distance== and ==target size== affect this?

The best way to tackle these questions? Build a ==model== to predict it. So, what’s a model? In simple terms, a model is like **a blueprint or a simplified version of something that helps us understand how it works**, or even **how it might work in the future**.

Models can be: 
- ==as simple as possible== or 
- ==as complex as they need to be==
depending on what we’re trying to figure out. However, model is **never perfect**. They're always **based on some ==assumptions==**, so they don’t cover _everything_. Instead, they’re designed to focus on **specific phenomena**.

But how do Fitts build the model? He needed ==real data== to work with, so he designed an experiment for it.
### Fitts' Experiment
![](/assets/imgs/20241025-1.png)
Paul designed an experiment like the one shown in the picture above. This 1D task asked participants to **click a button of a certain width positioned at a specific distance away**. Here’s how it was set up:

- **Four distances** ($D$): 2, 4, 8, and 16 inches
- **Four widths** ($W$): 0.25, 0.5, 1, and 2 inches
- **16 unique combinations** of distance and width

![](/assets/imgs/20241025-2.png)

In this experiment, participants had to move a pen to touch the button at the specified distance, while the ==time== it took them to make each movement was recorded, as shown in the figures below.

![](/assets/imgs/20241025-3.png)
![](/assets/imgs/20241025-4.png)

#### Observations

Intuitively, the ==movement time== increases as the distance increases, and it decreases as the button size gets larger. But there’s more to it! When we look closely, we find **some interesting patterns where the data points are ==very close== to each other**.

For example:

- The movement time at $(D:2, W:0.25)$ is almost the same as at $(D:4, W:0.5)$, as well as at $(D:8, W:1)$ and $(D:16, W:2)$.
- Similarly, the movement time at $(D:8, W:0.25)$ is close to $(D:16, W:0.5)$, and this pattern continues.

![](/assets/imgs/20241025-5.png)

This isn’t a coincidence! These observations lead us to some important conclusions about how distance and width together affect movement time.

#### Conclusions

First, **movement time is ==task-dependent==**—different tasks result in different movement times.

In pointing tasks specifically, two key factors affect performance:

- **==Target Distance== (Movement Amplitude)**: The farther the target, the longer it takes to reach.
- **==Target Width== (Landing Tolerance)**: The smaller the target, the more we need to slow down to hit it accurately.

So, if a target is ==closer==, we can reach it ==faster==; if it’s ==smaller==, we have to move ==more carefully== to land on it.

Now that Fitts had some data, he could start using it to build his model.

### Index of Difficulty ($ID$)

To model the results, Paul Fitts proposed a way to combine both ==distance== and ==width== into a single value called the **==Index of Difficulty (ID)==**, measured in bits. The formula looks like this:
$$ID = \log_2 \left( \frac{D}{W} + 1 \right)$$
This formula captures the relationship between distance ($D$) and width ($W$). Essentially, the ==ratio== between $D$ and $W$ determines the ==difficulty of the task==. At the ==same difficulty== level, the $\frac{D}{W}$ ==ratio== should ==stay constant==.

For example, in these tasks where $\frac{D}{W}$ equals 8:
$$ID = \log_2 (8 + 1) = 3.17 \text{ bits}$$
![](/assets/imgs/20241025-5.png)

In the visualization below, you can see how the pointer interacts with the object:

- For targets at the ==same distance==, **==larger== targets** result in a smaller $ID$.
- For targets of the ==same size==, **==closer== targets** result in a smaller $ID$.
![](/assets/imgs/20241025-8.png)
This is how Fitts' Law starts to ==quantify the difficulty== of aiming tasks based on distance and size! But how does the **Index of Difficulty (ID)** relate to movement time? That’s where the full Fitts' Law model comes into play.
### Building a Fitts' Law Model
![](/assets/imgs/20241025-9.png)
As shown in the figure, movement time ($MT$) is directly related to task difficulty. This relationship is **linear** and follows Fitts’ Law:
$$MT = a + b \cdot ID = a + b \cdot \log_2 \left( \frac{D}{W} + 1 \right)
$$
- **Distance ($D$)**: ==Distance== to the target
- **Width ($W$)**: ==Width== of the target in the direction of the movement
- **$ID$ (Index of Difficulty)**: The calculated ==difficulty level== of the task, measured in _bits_
- **$b$**: ==Rate== at which movement time increases with task difficulty, in _seconds/bit_
- **$a$**: A ==constant time offset==, in _seconds_

:::info
- $D$, $W$ and $ID$ are properties of the movement task
	- ++==independent==++ of the device used for the movement
- $a$ and $b$ are ++==device-dependent==++, on the device and body part used to perform the movement
:::
## Speed-Accuracy Trade-off
Fitts’ Law captures the **==speed-accuracy trade-off==** in movement.
- We move ==faster==, when we ==don’t== have to be ==accurate==
- We can be ==more accurate==, when we move ==more slowly==

![](/assets/imgs/20241025-12.png)

The speed-accuracy trade-off is a fundamental property of input in user interfaces. For example, when we move faster, we make more errors, pointing with less precision and more typing errors.

However, ==speed and accuracy== of input depend on the ==input method==. There are many factors that can influence speed and accuracy:
- **User’s movement** in motor space (e.g., eye, head, hand movements)
- **Input devices and trackers** used (e.g., mouse, trackpad, joystick)
- **Mapping of input** from motor space to display space (e.g., control-display gain, transfer function)
Collectively we refer to these as **==Factor of Device==**.
### Control-Display Gain (CD Gain)

An example of a **Factor of Device** is **Control-Display Gain (CD Gain)**. CD Gain is a scale factor that determines how input from a device (like a mouse or joystick) maps to the cursor movement on the display:
$$CD_{\text{gain}} = \frac{V_{\text{display}}}{V_{\text{control}}}
$$
![](/assets/imgs/20241025-13.png)
- **When CD Gain > 1**: Less movement of the input device is needed, allowing faster cursor movement (useful for coarse pointing).
- **When CD Gain < 1**: The cursor moves more slowly than the input device, enabling finer, more precise control (ideal for fine positioning).

## Throughput

Throughput is the amount of data that can pass through a system in a given amount of time
- In communication systems, throughput depends on bandwidth (speed) and signal-to-noise ratio (accuracy)
- It provides a single metric of a system's efficiency, that combines speed and accuracy, measured in bit/s
One of the key ideas underlying Fitts’ Law is that we can adopt throughput as a single measure of human performance with an input device, for the transfer of information to a computer