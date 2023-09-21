import React, {FC, useMemo, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
    runOnJS,
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { interpolatePath } from "react-native-redash";

import { SCREEN_WIDTH } from "../../constants/Screen";
import usePath from "../../hooks/usePath";
import { getPathXCenter } from "../../utils/Path";
import TabItem from "./Tabitem";
import AnimatedCircle from "./AnimatedCircle";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";