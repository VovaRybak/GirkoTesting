chcp 1251
set papka=15
:1
set /A papka=papka+1
md %papka%
if not %papka%==40 goto 1
del: virus.bat