---
title: Fitts' Law
keywords: 
tags:
  - Science
  - HCI
categories:
  - Knowledge
  - HCI
description: 
author: Yuzi
cover: assets/covers/default-banner.jpeg
thumbnail: assets/covers/default-banner.jpeg
comments: true
top: 1
copyright: false
date: 2024-10-24 17:17:14
updated: 2024-10-25 15:33:31
math: true
---
## What is Fitts' Law?

Fitts' Law was proposed by Paul Fitts, who is a psychologist and a pioneer in human factors. Back to the 20th century, researcher had some overview in how human performance, but there was still some questions was not solved:

- How long dose it take to make a movement to a known target?
- How does this depend on properties of the movement task (distance and size of the target)?

The best way to solve these questions is to build a model for it. But how? Because these questions are human behavior questions, Paul need some data from experiments to build the model. And the way he do this, is also how modern HCI researcher usually to solve a HCI problem.
### Fitts' Experiment
![](/assets/imgs/20241025-1.png)
Paul designed a experiment as the picture above present. This 1D task is to click a button with certain width in certain distance:
- Four distances ($D$): 2, 4, 8, 16 inch
- Four widths ($W$): 0.25, 0.5, 1, 2 inch
- 16 combination

![](/assets/imgs/20241025-2.png)

Participants were asked to move their pen to touch the button in the distance, and the movement time were recorded as the figure shows below:

![](/assets/imgs/20241025-3.png)
![](/assets/imgs/20241025-4.png)

Obviously and intuitionally, the movement time increase as the distance increase, and the movement time decrease as the button size increase. But this is not the all. If we look more carefully, there is some data that really close each other:

![](/assets/imgs/20241025-5.png)

The figure above shows that the movement time at $(D:2, W:0.25)$ is close to the movement time at $(D:4, W:0.5)$, and also $(D:8, W:1)$ and $(D:16, W:2)$. This is not the coincident. We can also easily see that the movement time at $(D:8, W:0.25)$ is similar to the movement time at $(D:16, W:0.5)$ and so on. Hence, we can have something in conclude.

#### Fitts' Experiment Conclusions

Firstly, the movement time depends on the task. Different tasks have different movement time. 

Also, the pointing task has two properties that affect performance:
- Target distance (=Amplitude of the movement)
- Target width (=Tolerance for landing on the target)

When a target is nearer, we can reach it faster; 
When a target is smaller, we have to slow down to land on it.
### Index of Difficulty ($ID$)

To model the result, Paul Fitts proposed to combine distance and width in to a single *index of difficulty*, measured in bits:
$$ID = \log_2 \left( \frac{D}{W} + 1 \right)$$
This formula shows the basic relation between $D$ and $W$. Generally speaking, at the same difficulty level, The $\frac{D}{W}$ should be remain the same.

For example, these for tasks have the same $\frac{D}{W}$ ratio 8. 

$ID = \log_2 (8 + 1) = 3.17 \text{ bits}$
![](/assets/imgs/20241025-5.png)

The figure below visualized the pointer and the object. In the same distance, the larger target leads to a smaller $ID$; In the same size, nearer target leads to a smaller $ID$.

![](/assets/imgs/20241025-8.png)
### Building a Fitts' Law Model
![](/assets/imgs/20241025-9.png)
Movement time depends on task difficulty, and the relationship is linear. Fitts' Law: $MT = a + b * ID$, where the values for $a$ and $b$ are specific to the apparatus / device.
$$MT = a + b \cdot ID = a + b \cdot \log_2 \left( \frac{D}{W} + 1 \right)
$$
- Distance ($D$): distance of the target
- Width ($W$): width of the target in the direction of the movement
- $ID$: Index of difficulty of the task, in *bits*
- $b$: rate at which time increases with task difficulty, in *seconds/bit*
- $a$ is a time constant, in *seconds*

:::info
- $D$, $W$ and $ID$ are properties of the movement task
	- ++independent++ of the device used for the movement
- $a$ and $b$ are ++device-dependent++, on the device and body part used to perform the movement
:::
### Speed-Accuracy Trade-off
### Throughput in HCI
## Why Fitts' Law is Important?