# SB scss utils

**Installation:**
```bash
pnpm i -D @sbsys/sb-scss
```

**Usage:**
```scss
@use '@sbsys/sb-scss'  as sb;
```

### @media screen

```scss
$break-points: (
    6xs: 320px,
    5xs: 384px,
    4xs: 448px,
    3xs: 512px,
    2xs: 576px,
    xs: 640px,
    sm: 704px,
    md: 768px,
    lg: 896px,
    xl: 1024px,
    2xl: 1152px,
    3xl: 1280px,
    4xl: 1408px,
    5xl: 1536px,
    6xl: 1664px,
);
```

```scss
@include sb.min-width(<break-point>) {
    ...
}
@include sb.min-height(<break-point>) {
    ...
}
// To look up for selector[min-width='-break-point-']
selector {
    @include sb.element-min-width(<break-point>) {
        ...
    }
}
// To look up for selector[min-height='-break-point-']
selector {
    @include sb.element-min-height(<break-point>) {
        ...
    }
}
```

### Theming

add `.theme--<theme>` as css class to a parent `tag`

```scss
// To be applied to all parent tags with '.theme--<theme>' css class
@include sb.theme(<theme>) {
    ...
}
// To be applied to '.theme--<theme> selector' child tag
selector {
    @include sb.theme(<theme>) {
        ...
    }
}
// To be applied with 'prefers-color-scheme:'
@include sb.theme-dark {
    ...
}
@include sb.theme-light {
    ...
}
```
