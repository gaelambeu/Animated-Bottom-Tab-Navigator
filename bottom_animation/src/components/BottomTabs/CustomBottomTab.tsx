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
