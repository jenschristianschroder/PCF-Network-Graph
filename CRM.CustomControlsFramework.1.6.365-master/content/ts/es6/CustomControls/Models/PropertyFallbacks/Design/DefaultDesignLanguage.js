export var DEFAULT_BASE_PALETTE = {
    Primary01: "#0078D4",
    Primary02: "#006cbe",
    Primary03: "#005ba1",
    Primary04: "#004377",
    Primary05: "#a9d3f2",
    Primary06: "#5ca9e5",
    Error01: "#a4262c",
    Error02: "#fde7e9",
    Error03: "#d83b01",
    Error04: "#fed9cc",
    Neutral01: "#ffffff",
    Neutral02: "#Faf9f8",
    Neutral03: "#f3f2f1",
    Neutral04: "#edebe9",
    Neutral05: "#e1dfdd",
    Neutral06: "#d2d0ce",
    Neutral07: "#c8c6c4",
    Neutral08: "#bebbb8",
    Neutral09: "#b3b0ad",
    Neutral10: "#a19f9d",
    Neutral11: "#8a8886",
    Neutral12: "#605e5c",
    Neutral13: "#323130",
    Neutral14: "#201f1e",
    Data01: "#3e8ef7",
    Data02: "#132898",
    Data03: "#d77245",
    Data04: "#611676",
    Data05: "#cf52a4",
    Data06: "#6e53bb",
    DataEmpty: "#e6e6e6",
};
export function GenerateBaseColorReferences(Palette) {
    Palette = Object.assign({}, DEFAULT_BASE_PALETTE, Palette);
    var patterns = {};
    patterns.Contrast = Palette.Neutral01;
    patterns.Text01 = Palette.Neutral13;
    patterns.Text02 = Palette.Neutral14;
    patterns.Background = patterns.Contrast;
    patterns.DisabledBackground = Palette.Neutral03;
    patterns.DisabledForeground = Palette.Neutral10;
    patterns.InputBorder = Palette.Neutral12;
    patterns.InputFocusBorder = Palette.Primary01;
    patterns.KeyboardFocusBorder = Palette.Neutral12;
    patterns.PivotColor = Palette.Primary01;
    return {
        Palette: Palette,
        Patterns: patterns,
    };
}
export var DEFAULT_COLORS = GenerateBaseColorReferences({});
export function GenerateBaseComponentValues(colors) {
    return {
        TextInput: {
            PrefixBackgroundColor: colors.Palette.Neutral03,
            PrefixForegroundColor: colors.Palette.Neutral12,
            SuffixBackgroundColor: colors.Palette.Neutral03,
            SuffixForegroundColor: colors.Palette.Neutral12,
            Disabled: {
                TextColor: colors.Patterns.DisabledForeground,
                BackgroundColor: colors.Patterns.DisabledBackground,
                BorderColor: colors.Palette.Neutral03,
                LinkColor: colors.Patterns.DisabledForeground,
            },
            View: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Patterns.Background,
                BorderColor: colors.Patterns.InputBorder,
                LinkColor: colors.Patterns.Text01,
            },
            Edit: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Patterns.Background,
                BorderColor: colors.Patterns.InputBorder,
                LinkColor: colors.Palette.Primary01,
                Valid: {
                    Hover: {
                        BorderColor: colors.Palette.Neutral13,
                    },
                    Focus: {
                        BorderColor: colors.Patterns.InputFocusBorder,
                    },
                    Open: {
                        BorderColor: colors.Palette.Neutral09,
                    },
                },
                Invalid: {
                    BorderColor: colors.Palette.Error01,
                    ErrortextColor: colors.Palette.Error01,
                },
            },
        },
        Link: {
            Enabled: {
                TextColor: colors.Palette.Primary01,
                Hover: {
                    TextColor: colors.Palette.Primary04,
                },
            },
            Disabled: {
                TextColor: colors.Patterns.DisabledForeground,
            },
        },
        ButtonPrimary: {
            BackgroundColor: colors.Palette.Primary01,
            TextColor: colors.Patterns.Contrast,
            Disabled: {
                BackgroundColor: colors.Patterns.DisabledBackground,
                TextColor: colors.Patterns.DisabledForeground,
            },
            Enabled: {
                Hover: {
                    BackgroundColor: colors.Palette.Primary02,
                    TextColor: colors.Patterns.Contrast,
                },
                Pressed: {
                    BackgroundColor: colors.Palette.Primary03,
                    TextColor: colors.Patterns.Text01,
                },
            },
        },
        ButtonSecondary: {
            BackgroundColor: colors.Patterns.Background,
            TextColor: colors.Patterns.Text01,
            BorderColor: colors.Palette.Neutral11,
            Disabled: {
                BackgroundColor: colors.Patterns.DisabledBackground,
                TextColor: colors.Patterns.DisabledForeground,
            },
            Enabled: {
                Hover: {
                    BackgroundColor: colors.Palette.Neutral03,
                    TextColor: colors.Patterns.Text01,
                },
                Pressed: {
                    BackgroundColor: colors.Palette.Neutral04,
                    TextColor: colors.Patterns.Text02,
                },
            },
        },
        Label: {
            TextColor: colors.Patterns.Text01,
            Disabled: {
                TextColor: colors.Patterns.DisabledForeground,
            },
        },
        Dropdown: {
            TextColor: colors.Patterns.Text01,
            BorderColor: colors.Patterns.InputBorder,
            Disabled: {
                TextColor: colors.Patterns.DisabledForeground,
                BackgroundColor: colors.Patterns.DisabledBackground,
                BorderColor: colors.Palette.Neutral03,
            },
            Enabled: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Patterns.Background,
                Valid: {
                    Hover: {
                        BorderColor: colors.Palette.Neutral13,
                    },
                    Focus: {
                        BorderColor: colors.Patterns.InputFocusBorder,
                    },
                    Open: {
                        BorderColor: colors.Palette.Neutral09,
                    },
                },
                Invalid: {
                    BorderColor: colors.Palette.Error01,
                },
            },
        },
        DropdownMenu: {
            BackgroundColor: colors.Patterns.Background,
            Menuitem: {
                BackgroundColor: colors.Patterns.Background,
                BorderColor: colors.Patterns.Background,
                Disabled: {
                    TextColor: colors.Patterns.DisabledForeground,
                },
                Enabled: {
                    Hover: {
                        TextColor: colors.Patterns.Text02,
                        BackgroundColor: colors.Palette.Neutral03,
                        BorderColor: colors.Palette.Neutral03,
                    },
                    Focus: {
                        TextColor: colors.Patterns.Text01,
                        BackgroundColor: colors.Patterns.Background,
                        BorderColor: colors.Patterns.KeyboardFocusBorder,
                    },
                    Selected: {
                        TextColor: colors.Patterns.Text02,
                        BackgroundColor: colors.Palette.Neutral04,
                        BorderColor: colors.Palette.Neutral04,
                    },
                },
            },
        },
        Gauge: {
            TextColor: colors.Patterns.Text01,
            BackgroundColor: colors.Patterns.Background,
            FullArcColor: colors.Palette.Primary01,
            EmptyArcColor: colors.Palette.DataEmpty,
        },
        CommandBar: {
            BackgroundColor: colors.Patterns.Background,
            Command: {
                TextColor: colors.Patterns.Text01,
                IconColor: colors.Palette.Primary01,
                Hover: {
                    BackgroundColor: colors.Palette.Neutral03,
                },
                Pressed: {
                    BackgroundColor: colors.Palette.Neutral04,
                },
                Focus: {
                    BorderColor: colors.Patterns.KeyboardFocusBorder,
                },
            },
        },
        Form: {
            PivotColor: colors.Patterns.PivotColor,
            FooterCommand: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Palette.Neutral06,
                IconColor: colors.Palette.Neutral13,
                DividerColor: colors.Palette.Neutral08,
                Hover: {
                    BackgroundColor: colors.Palette.Neutral07,
                },
                Press: {
                    BackgroundColor: colors.Palette.Neutral08,
                },
                Focus: {
                    BorderColor: colors.Patterns.KeyboardFocusBorder,
                },
            },
        },
        MessageBar: {
            Info: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Palette.Neutral03,
                IconColor: colors.Palette.Neutral12,
            },
            SevereWarning: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Palette.Error04,
                IconColor: colors.Palette.Error03,
            },
            Blocked: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Palette.Error02,
                IconColor: colors.Palette.Error01,
            },
            Locked: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Palette.Neutral05,
                IconColor: colors.Palette.Neutral12,
            },
        },
        Grid: {
            ColumnHeader: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Patterns.Background,
                CheckmarkIconColor: colors.Palette.Neutral07,
                SortFilterIconColor: colors.Palette.Neutral12,
                DividerColor: colors.Palette.Neutral04,
                Focus: {
                    BorderColor: colors.Patterns.KeyboardFocusBorder,
                },
            },
            Cell: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Patterns.Background,
                LinkColor: colors.Palette.Primary01,
                Hover: {
                    TextColor: colors.Patterns.Text02,
                    BackgroundColor: colors.Palette.Neutral03,
                },
                Selected: {
                    TextColor: colors.Patterns.Text02,
                    BackgroundColor: colors.Palette.Neutral04,
                    CheckmarkIconColor: colors.Palette.Neutral13,
                },
                Focus: {
                    BorderColor: colors.Patterns.KeyboardFocusBorder,
                },
            },
            Footer: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Patterns.Background,
                IconColor: colors.Palette.Primary01,
                Focus: {
                    BorderColor: colors.Patterns.KeyboardFocusBorder,
                },
                Disabled: {
                    IconColor: colors.Patterns.DisabledForeground,
                },
            },
        },
        AppHeader: {
            TextColor: colors.Patterns.Contrast,
            BackgroundColor: colors.Palette.Primary01,
            IconColor: colors.Palette.Neutral01,
            Hover: {
                BackgroundColor: colors.Palette.Primary03,
            },
            Pressed: {
                BackgroundColor: colors.Patterns.Background,
                IconColor: colors.Palette.Neutral13,
            },
            Focus: {
                BorderColor: colors.Patterns.Background,
            },
        },
        Navigation: {
            Rest: {
                TextColor: "#323130",
                IconColor: "#605e5c",
                BackgroundColor: "#f3f2f1",
                DividerColor: "edebe9",
                Hover: {
                    TextColor: "#201f1e",
                    IconColor: "#605e5c",
                    BackgroundColor: "#fffff",
                },
                Focus: {
                    BorderColor: colors.Patterns.KeyboardFocusBorder,
                },
            },
            Selected: {
                TextColor: "#201f1e",
                IconColor: "#605e5c",
                BackgroundColor: "#ffffff",
                PivotColor: colors.Patterns.PivotColor,
                Focus: {
                    BorderColor: colors.Patterns.KeyboardFocusBorder,
                },
            },
        },
        Dashboard: {
            TextColor: colors.Patterns.Text01,
            BackgroundColor: colors.Palette.Neutral02,
            ViewSelector: {
                TextColor: colors.Patterns.Text01,
                ChevronColor: colors.Palette.Neutral13,
                ChevronBackgroundColor: colors.Palette.Neutral02,
                Hover: {
                    ChevronBackgroundColor: colors.Palette.Neutral04,
                },
                Pressed: {
                    ChevronBackgroundColor: colors.Palette.Neutral04,
                },
                Open: {
                    ChevronBackgroundColor: colors.Palette.Neutral04,
                },
            },
            Card: {
                TextColor: colors.Patterns.Text01,
                BackgroundColor: colors.Patterns.Background,
                DividerColor: colors.Palette.Neutral04,
                ActionButton: {
                    Rest: {
                        TextColor: colors.Patterns.Text01,
                        IconColor: colors.Palette.Primary01,
                        BackgroundColor: colors.Patterns.Background,
                        BorderColor: colors.Patterns.Background,
                        Focus: {
                            BorderColor: colors.Patterns.KeyboardFocusBorder,
                        },
                        Hover: {
                            TextColor: colors.Patterns.Text02,
                            IconColor: colors.Palette.Primary03,
                            BackgroundColor: colors.Palette.Neutral03,
                        },
                    },
                    Selected: {
                        TextColor: colors.Patterns.Text02,
                        IconColor: colors.Palette.Primary03,
                        BackgroundColor: colors.Palette.Neutral04,
                        BorderColor: colors.Palette.Neutral04,
                        Focus: {
                            BorderColor: colors.Patterns.KeyboardFocusBorder,
                        },
                        Hover: {
                            BackgroundColor: colors.Palette.Neutral05,
                        },
                    },
                    Disabled: {
                        TextColor: colors.Patterns.DisabledForeground,
                        IconColor: colors.Patterns.DisabledForeground,
                        BackgroundColor: colors.Patterns.Background,
                    },
                },
            },
        },
    };
}
export function GenerateFluentDL(colors, componentValues) {
    colors = Object.assign({}, GenerateBaseColorReferences(DEFAULT_BASE_PALETTE), colors);
    componentValues = Object.assign({}, GenerateBaseComponentValues(colors), componentValues);
    return {
        Colors: colors,
        Components: componentValues,
        DesignLanguageId: "Fluent",
        ThemeId: "default",
    };
}
export var DEFAULT_FLUENT_DL = GenerateFluentDL({}, {});
