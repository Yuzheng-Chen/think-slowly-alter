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
cover: assets/covers/fitts-law.jpg
thumbnail: assets/covers/fitts-law.jpg
comments: true
top: 1
copyright: false
date: 2024-10-24 17:17:14
updated: 2024-11-11 14:10:54
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

- In **communication systems**, throughput depends on **bandwidth** (speed) and signal-to-noise ratio (accuracy)
- It provides a single metric of a system's ==efficiency==, that combines speed and accuracy, measured in bit/s

One of the key ideas underlying Fitts’ Law is that we can **adopt throughput as a single measure of human performance with an input device**, for the transfer of information to a computer.

### Throughput in Fitts' Law

Fitts’ Law defines **throughput (TP)** as a measure of input efficiency:

$$

TP = \frac{ID}{MT} \quad \text{[in bit/s]}

$$

- **Throughput (ID/MT)** increases when:
    - We complete **more difficult tasks** (higher ID) within **a fixed time** (fixed MT).
    - We need less time (lower MT) to complete a task of a given difficulty (fixed ID).

Throughput combines speed and accuracy into a single metric of user performance with an input device, allowing us to assess overall input efficiency.

#### Throughput - Thought Experiment

![](/assets/imgs/20241027-1.jpg)

;;;throughput-scenario Scenario 1: No Errors

In this scenario, the user aims to be precise, avoiding any input errors. Here’s how throughput (TP = ID/MT) calculates for each interface:

- **Interface A (1 bit)**: MT = 250ms (0.25 seconds).
- **Interface B (4 bit)**: MT = 666ms (0.666 seconds.
- **Interface C (7 bit)**: MT = 1000ms (1 second).

+++info Which interface has the highest throughput?

- **Interface A (1 bit)**: ID = 1 bit, MT = 250ms (0.25 seconds), so TP = 1 / 0.25 = **4 bits/second**.
- **Interface B (4 bit)**: ID = 4 bits, MT = 666ms (0.666 seconds), so TP = 4 / 0.666 ≈ **6 bits/second**.
- **Interface C (7 bit)**: ID = 7 bits, MT = 1000ms (1 second), so TP = 7 / 1 = **7 bits/second**.

**Interface C** has the highest throughput (7 bits/second) due to its higher index of difficulty (ID) and despite the slower movement time. This shows that for precise tasks, throughput is highest when there is a balance between difficulty and movement time.

+++
;;;

;;;throughput-scenario Scenario 2: High-Speed Input

In this scenario, the user focuses on speed over accuracy, making selections at a high rate of 4 selections per second (MT = 250ms). However, with this speed, errors increase, especially as task difficulty rises. We adjust throughput to account for errors:

- **Interface A (1 bit)**: Error rate = 0%.
- **Interface B (4 bit)**: Error rate = 40%.
- **Interface C (7 bit)**: Error rate = 80%.

+++info Which interface has the highest throughput?

- **Interface A (1 bit)**: Error rate = 0%, so effective selections per second = 4. TP = ID × effective selections = 1 × 4 = **4 bits/second**.
- **Interface B (4 bit)**: Error rate = 40%, so effective selections per second = 4 × (1 - 0.4) = 2.4. TP = 4 × 2.4 = **9.6 bits/second**.
- **Interface C (7 bit)**: Error rate = 80%, so effective selections per second = 4 × (1 - 0.8) = 0.8. TP = 7 × 0.8 = **5.6 bits/second**.

**Interface B** has the highest throughput (9.6 bits/second) despite the 40% error rate. This shows that at high speeds, a moderate difficulty level (4 bits) can maximize throughput by balancing speed and acceptable error rates.

+++
;;;

#### Slope and Throughput Approximation

![](/assets/imgs/20241027-2.png)

According to Fitts' Law, movement time ($MT$) can be expressed as:

$$
MT = a + b \cdot ID
$$

Since throughput ($TP$) is defined as $TP = \frac{ID}{MT}$, we can approximate throughput as the **inverse of the slope** ($b$):

$$
TP = \frac{1}{b}
$$

This means that **==the flatter the slope==**, the higher the throughput. In other words, when bbb (the rate of increase in movement time with task difficulty) is lower, throughput is higher, indicating better input efficiency.

#### Throughput of Devices and Muscle Groups

![](/assets/imgs/20241027-3.png)
[Card, S. K. et al.](https://dl.acm.org/doi/pdf/10.1145/123078.128726) explored the perceived difficulty and efficiency of different tasks using a mouse and other input methods. Here are some key findings:

- **Mouse tasks** and perceived difficulty:
    - Selecting a word was considered the =="hardest easy task."==
    - Selecting a character was labeled the =="easiest hard task."==
- **Mouse throughput**: Approximately **10.4 bit/s** (based on 1991 data, with further optimization likely since then).
- **Fingers**: Higher throughput of **40 bit/s**, but this applies mainly for tasks involving **adjacent buttons** rather than general tasks.
- **Head pointing**: Less efficient, with a throughput of around **4.2 bit/s**.

## Application of Fitts' Law

### Fitts' Law applied to 2D Pointing

![](/assets/imgs/20241027-4.png)
$$MT = a + b \cdot \log_2 \left( \frac{D}{W} + 1 \right)
$$
**Distance ($D$)**: from current cursor position to center of target  
**Width ($w$)**: across target, ==in the direction of movement==

#### Example: Select the Square

**Question:** Find the movement time required for a cursor to reach and select the square.  
![](/assets/imgs/20241027-5.png)
Use these device constants:

- $a = 50ms$
- $b = 100ms/bit$

Given:
- Distance to target, $D = 6$ cm
- Width of the square target is $\sqrt{2}$ cm on each side.

Since Fitts' Law requires the **width in the movement direction**, we calculate the effective width $W$ as the **==diagonal==** length of the square. The diagonal is given by:
$$
W = (\sqrt{2})^2 = 2 \text{ cm}
$$

With $W = 2$ cm, we can now apply Fitts' Law:
$$
MT = a + b \cdot \log_2 \left( \frac{D}{W} + 1 \right)
$$

Substituting the values:
$$
MT = 50 + 100 \cdot \log_2 \left( \frac{6}{2} + 1 \right)
$$

Simplifying:
$$
MT = 50 + 100 \cdot 2 = 250 \text{ ms}
$$

## Summary

Fitts' Law is a fundamental principle in Human-Computer Interaction (HCI) and is widely applied not only in desktop devices but also in mobile and mixed reality (MR) devices for selection tasks. However, Fitts' Law specifically models the performance of **==aimed==** movements, making it effective for pointing tasks (both direct and indirect) but not applicable to tasks like drawing.

Fitts' Law is based on a few key assumptions:

- The target is **known in advance** (i.e., there is no search time).
- The target is **reachable in an uninterrupted movement** (no intermediate steps).

Despite these constraints, MR devices are increasingly incorporating ==**eye tracking**== as a popular input method. Whether Fitts' Law also applies to gaze-based selection remains an open question, requiring further research and experimentation.