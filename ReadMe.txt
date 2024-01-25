1. Please add querystring "vw=8" to index.html (i.e. index.html?vw=8). It fixes second row of tabs. 

2. Bugs can be visualize at 
https://www.loom.com/share/73c6d5ea416f4a4083ff61158f7f2f7c?sid=3d539e3c-d153-4298-b529-ac96a4eef650

3. Bugs description:
	#1: Mobile version. Remove layout zoom-in on placing a focus in text fields. Proper behavior can be found at apple.com
	#2: Vertical and horizontal scrolls should be limited to scrollable content. Table header for vertical scroll and left column for horizontal scroll are not scrollable.
 	#3: Fix "sticky" horizontal scroll after resizing browser window. Table content should fill all content container without leaving blank area in the right portion of the container.
	#4: Safari browser. When you click on the "i" icon after the vertical scroll was engaged, table's left column on blurred background goes beyond its top and bottom boundaries.


