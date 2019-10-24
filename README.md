# Double Buffering, How and When to use it?

**When to use Double Buffering?**

When your canvas program needs to display complex shapes or images, you might face the issue of your canvas screen flickering.
This problem can be solved by using double buffering. 

**How to use Double Buffering?**

The 2 things you need to do to make your program use double buffering are:
> call activateDoubleBuffer(); in setup()
>instead of calling canvas.clear() at the Start of the main function, call canvas.update() at the END of the main function.

To see for yourself:
>download this example
>run withoutDoubleBuffer.html. You will observe all the sprites flickering.
>run withDoubleBuffer.html. No more flickering!

Observe the differences in the 2 codes.

