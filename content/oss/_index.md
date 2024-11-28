---
title: "Open Source Software (OSS) Lizenzen"
date: 2024-07-29T09:33:49+02:00
tags: []
featured_image: ""
description: ""
headless: false
params:
    subtitle: "Letzte Aktualisierung: 27.11.2024"
---

## 1. Übersicht

{{< rawhtml >}}

<style>
  table {
    border-collapse: collapse;
    width: 80%;
  }
  td {
    width: 100px;
    height: 50px;
    max-width: 400px;
    max-height: 50px;
    overflow: hidden;
    border: 1px solid black;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <td>Name</td>
      <td>Beschreibung</td>
      <td>Homepage</td>
      <td>Repository</td>
      <td>Autoren</td>
      <td>Version</td>
      <td>Lizenz</td>    </tr>
  </thead>
  <tbody>
    <tr>
      <td>_fe_analyzer_shared</td>
      <td>Logic that is shared between the front_end and analyzer packages.</td>
      <td></td>
      <td>https://github.com/dart-lang/sdk/tree/main/pkg/_fe_analyzer_shared</td>
      <td></td>
      <td>67.0.0</td>
      <td>Dart Project License, Copyright 2019, the Dart project authors</td>    </tr>
    <tr>
      <td>amplify_analytics_pinpoint</td>
      <td>The Amplify Flutter Analytics category plugin using the AWS Pinpoint provider.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/analytics/amplify_analytics_pinpoint</td>
      <td></td>
      <td>2.5.0</td>
      <td>Apache License Version 2.0, January 2004</td>    </tr>
    <tr>
      <td>amplify_analytics_pinpoint_dart</td>
      <td>A Dart-only implementation of the Amplify Analytics plugin for Pinpoint.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/analytics/amplify_analytics_pinpoint_dart</td>
      <td></td>
      <td>0.4.6</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_api</td>
      <td>The Amplify Flutter API category plugin, supporting GraphQL and REST operations.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/api/amplify_api</td>
      <td></td>
      <td>2.5.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_api_dart</td>
      <td>The Amplify API category plugin in Dart-only, supporting GraphQL and REST operations.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/api/amplify_api_dart</td>
      <td></td>
      <td>0.5.7</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_auth_cognito</td>
      <td>The Amplify Flutter Auth category plugin using the AWS Cognito provider.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/auth/amplify_auth_cognito</td>
      <td></td>
      <td>2.5.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_auth_cognito_dart</td>
      <td>A Dart-only implementation of the Amplify Auth plugin for Cognito.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/next/packages/auth/amplify_auth_cognito_dart</td>
      <td></td>
      <td>0.11.7</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_authenticator</td>
      <td>A prebuilt Sign In and Sign Up experience for the Amplify Auth category</td>
      <td>https://ui.docs.amplify.aws/flutter/connected-components/authenticator</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/authenticator/amplify_authenticator</td>
      <td></td>
      <td>2.3.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_core</td>
      <td>The base package containing common types and utilities that are shared across the Amplify Flutter packages.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/amplify_core</td>
      <td></td>
      <td>2.5.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_db_common</td>
      <td>Common utilities for working with databases such as SQLite.</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/common/amplify_db_common</td>
      <td></td>
      <td>0.4.6</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_db_common_dart</td>
      <td>Common utilities for working with databases such as sqlite. Used throughout Amplify packages.</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/common/amplify_db_common_dart</td>
      <td></td>
      <td>0.4.7</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_flutter</td>
      <td>The top level Flutter package for the AWS Amplify libraries.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/amplify/amplify_flutter</td>
      <td></td>
      <td>2.5.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_secure_storage</td>
      <td>A package for storing secrets, intended for use in Amplify libraries.</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/secure_storage/amplify_secure_storage</td>
      <td></td>
      <td>0.5.7</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_secure_storage_dart</td>
      <td>A Dart-only implementation of `amplify_secure_storage`, using `dart:ffi` for Desktop and `dart:html` for Web.</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/secure_storage/amplify_secure_storage_dart</td>
      <td></td>
      <td>0.5.3</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_storage_s3</td>
      <td>The Amplify Flutter Storage category plugin using the AWS S3 provider.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/storage/amplify_storage_s3</td>
      <td></td>
      <td>2.5.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>amplify_storage_s3_dart</td>
      <td>A Dart-only implementation of the Amplify Storage plugin for S3.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/storage/amplify_storage_s3_dart</td>
      <td></td>
      <td>0.4.6</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>analyzer</td>
      <td>This package provides a library that performs static analysis of Dart code.</td>
      <td></td>
      <td>https://github.com/dart-lang/sdk/tree/main/pkg/analyzer</td>
      <td></td>
      <td>6.4.1</td>
      <td>Dart Project License, Copyright 2013, the Dart project authors</td>
    </tr>
    <tr>
      <td>anim_search_bar</td>
      <td>A flutter package that has an animated search bar with loads of customization</td>
      <td>https://github.com/Imgkl/anim_search_bar</td>
      <td></td>
      <td>Sai Gokula Krishnan</td>
      <td>2.0.3</td>
      <td>MIT License, Copyright (c) 2021</td>
    </tr>
    <tr>
      <td>ansicolor</td>
      <td>Looking to add some color to your terminal logs? `ansicolor` is an xterm-256 color support library that lets you change the foreground and background color of your text.</td>
      <td></td>
      <td>https://github.com/google/ansicolor-dart</td>
      <td></td>
      <td>2.0.3</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>archive</td>
      <td>Provides encoders and decoders for various archive and compression formats such as zip, tar, bzip2, gzip, and zlib.</td>
      <td></td>
      <td>https://github.com/brendan-duncan/archive</td>
      <td>Brendan Duncan</td>
      <td>3.6.1</td>
      <td>The MIT License, Copyright (c) 2013-2021</td>
    </tr>
    <tr>
      <td>args</td>
      <td>Library for defining parsers for parsing raw command-line arguments into a set of options and values using GNU and POSIX style options.</td>
      <td></td>
      <td>https://github.com/dart-lang/core/main/pkgs/args</td>
      <td></td>
      <td>2.6.0</td>
      <td>Dart Project License, Copyright 2013, the Dart project authors</td>
    </tr>
    <tr>
      <td>async</td>
      <td>Utility functions and classes related to the 'dart:async' library.</td>
      <td></td>
      <td>https://github.com/dart-lang/async</td>
      <td></td>
      <td>2.11.0</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>aws_common</td>
      <td>Common types and utilities used across AWS and Amplify packages.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/aws_common</td>
      <td></td>
      <td>0.7.4</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>aws_signature_v4</td>
      <td>Dart implementation of the AWS Signature Version 4 algorithm, for communication with AWS services.</td>
      <td>https://docs.amplify.aws/lib/q/platform/flutter/</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/aws_signature_v4</td>
      <td></td>
      <td>0.6.3</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>boolean_selector</td>
      <td>A flexible syntax for boolean expressions, based on a simplified version of Dart's expression syntax.</td>
      <td></td>
      <td>https://github.com/dart-lang/boolean_selector</td>
      <td></td>
      <td>2.1.1</td>
      <td>Dart Project License, Copyright 2016, the Dart project authors</td>
    </tr>
    <tr>
      <td>build</td>
      <td>A package for authoring build_runner compatible code generators.</td>
      <td></td>
      <td>https://github.com/dart-lang/build/tree/master/build</td>
      <td></td>
      <td>2.4.1</td>
      <td>Dart Project License, Copyright 2016, the Dart project authors</td>
    </tr>
    <tr>
      <td>build_cli_annotations</td>
      <td>Contains annotations for `package:build_cli`. See that package for more information.</td>
      <td>https://github.com/kevmoo/build_cli</td>
      <td></td>
      <td>Kevin Moore</td>
      <td>2.1.0</td>
      <td>MIT License, Copyright (c) 2018</td>
    </tr>
    <tr>
      <td>build_config</td>
      <td>Format definition and support for parsing `build.yaml` configuration.</td>
      <td></td>
      <td>https://github.com/dart-lang/build/tree/master/build_config</td>
      <td></td>
      <td>1.1.1</td>
      <td>Dart Project License, Copyright 2017, the Dart project authors</td>
    </tr>
    <tr>
      <td>build_daemon</td>
      <td>A daemon for running Dart builds.</td>
      <td></td>
      <td>https://github.com/dart-lang/build/tree/master/build_daemon</td>
      <td></td>
      <td>4.0.2</td>
      <td>Dart Project License, Copyright 2019, the Dart project authors</td>
    </tr>
    <tr>
      <td>build_resolvers</td>
      <td>Resolve Dart code in a Builder</td>
      <td></td>
      <td>https://github.com/dart-lang/build/tree/master/build_resolvers</td>
      <td></td>
      <td>2.4.2</td>
      <td>Dart Project License, Copyright 2018, the Dart project authors</td>
    </tr>
    <tr>
      <td>build_runner</td>
      <td>A build system for Dart code generation and modular compilation.</td>
      <td></td>
      <td>https://github.com/dart-lang/build/tree/master/build_runner</td>
      <td></td>
      <td>2.4.11</td>
      <td>Dart Project License, Copyright 2016, the Dart project authors</td>
    </tr>
    <tr>
      <td>build_runner_core</td>
      <td>Core tools to organize the structure of a build and run Builders.</td>
      <td></td>
      <td>https://github.com/dart-lang/build/tree/master/build_runner_core</td>
      <td></td>
      <td>7.3.1</td>
      <td>Dart Project License, Copyright 2018, the Dart project authors</td>
    </tr>
    <tr>
      <td>built_collection</td>
      <td>Immutable collections based on the SDK collections. Each SDK collection class is split into a new immutable collection class and a corresponding mutable builder class.
</td>
      <td>https://github.com/google/built_collection.dart</td>
      <td></td>
      <td></td>
      <td>5.1.1</td>
      <td>Google License, Copyright 2015, Google Inc.</td>
    </tr>
    <tr>
      <td>built_value</td>
      <td>Value types with builders, Dart classes as enums, and serialization. This library is the runtime dependency.
</td>
      <td></td>
      <td>https://github.com/google/built_value.dart/tree/master/built_value</td>
      <td></td>
      <td>8.9.2</td>
      <td>Google License, Copyright 2015, Google Inc.</td>
    </tr>
    <tr>
      <td>cancellation_token</td>
      <td>Easy async task cancellation for tasks using cancellation tokens in Dart.</td>
      <td></td>
      <td>https://github.com/jonathanpetercole/dart-cancellation-token</td>
      <td>Jonathan Cole</td>
      <td>2.0.1</td>
      <td>MIT License, Copyright (c) 2022</td>
    </tr>
    <tr>
      <td>characters</td>
      <td>String replacement with operations that are Unicode/grapheme cluster aware.</td>
      <td></td>
      <td>https://github.com/dart-lang/characters</td>
      <td></td>
      <td>1.3.0</td>
      <td>Dart Project License, Copyright 2019, the Dart project authors</td>
    </tr>
    <tr>
      <td>checked_yaml</td>
      <td>Generate more helpful exceptions when decoding YAML documents using package:json_serializable and package:yaml.</td>
      <td></td>
      <td>https://github.com/google/json_serializable.dart/tree/master/checked_yaml</td>
      <td></td>
      <td>2.0.3</td>
      <td>Dart Project License, Copyright 2019, the Dart project authors</td>
    </tr>
    <tr>
      <td>cli_util</td>
      <td>A library to help in building Dart command-line apps.</td>
      <td></td>
      <td>https://github.com/dart-lang/tools/tree/main/pkgs/cli_util</td>
      <td></td>
      <td>0.4.2</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>clock</td>
      <td>A fakeable wrapper for dart:core clock APIs.</td>
      <td></td>
      <td>https://github.com/dart-lang/clock</td>
      <td></td>
      <td>1.1.1</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>code_builder</td>
      <td>A fluent, builder-based library for generating valid Dart code</td>
      <td></td>
      <td>https://github.com/dart-lang/code_builder</td>
      <td></td>
      <td>4.10.0</td>
      <td>Dart Project License, Copyright 2016, the Dart project authors</td>
    </tr>
    <tr>
      <td>collection</td>
      <td>Collections and utilities functions and classes related to collections.</td>
      <td></td>
      <td>https://github.com/dart-lang/collection</td>
      <td></td>
      <td>1.18.0</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>connectivity_plus</td>
      <td>Flutter plugin for discovering the state of the network (WiFi &amp; mobile/cellular) connectivity on Android and iOS.</td>
      <td>https://github.com/fluttercommunity/plus_plugins</td>
      <td>https://github.com/fluttercommunity/plus_plugins/tree/main/packages/connectivity_plus/connectivity_plus</td>
      <td></td>
      <td>6.1.0</td>
      <td>Chromium License, Copyright 2017, The Chromium Authors</td>
    </tr>
    <tr>
      <td>connectivity_plus_platform_interface</td>
      <td>A common platform interface for the connectivity_plus plugin.</td>
      <td>https://github.com/fluttercommunity/plus_plugins</td>
      <td>https://github.com/fluttercommunity/plus_plugins/tree/main/packages/</td>
      <td></td>
      <td>2.0.1</td>
      <td>Chromium License, Copyright 2020 The Chromium Authors</td>
    </tr>
    <tr>
      <td>convert</td>
      <td>Utilities for converting between data representations. Provides a number of Sink, Codec, Decoder, and Encoder types.</td>
      <td></td>
      <td>https://github.com/dart-lang/core/tree/main/pkgs/convert</td>
      <td></td>
      <td>3.1.2</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>crclib</td>
      <td>Collection of cyclic redundancy check (CRC) routines as Dart converters.</td>
      <td>https://github.com/google/crclib.dart</td>
      <td></td>
      <td>Nam T. Nguyen</td>
      <td>3.0.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>cross_file</td>
      <td>An abstraction to allow working with files across multiple platforms.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/cross_file</td>
      <td></td>
      <td>0.3.4+2</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>crypto</td>
      <td>Implementations of SHA, MD5, and HMAC cryptographic functions.</td>
      <td></td>
      <td>https://github.com/dart-lang/core/tree/main/pkgs/crypto</td>
      <td></td>
      <td>3.0.6</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>csslib</td>
      <td>A library for parsing and analyzing CSS (Cascading Style Sheets).</td>
      <td></td>
      <td>https://github.com/dart-lang/tools/tree/main/pkgs/csslib</td>
      <td></td>
      <td>1.0.2</td>
      <td>Dart Project License, Copyright 2013, the Dart project authors</td>
    </tr>
    <tr>
      <td>cupertino_icons</td>
      <td>Default icons asset for Cupertino widgets based on Apple styled icons</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/third_party/packages/cupertino_icons</td>
      <td>Vladimir Kharlampidi</td>
      <td>1.0.8</td>
      <td>The MIT License (MIT), Copyright (c) 2016</td>
    </tr>
    <tr>
      <td>dart_pubspec_licenses</td>
      <td>A library to make it easy to extract OSS license information from Dart packages using pubspec.yaml</td>
      <td>https://github.com/espresso3389/flutter_oss_licenses/tree/master/packages/dart_pubspec_licenses</td>
      <td>https://github.com/espresso3389/flutter_oss_licenses</td>
      <td>Takashi Kawasaki</td>
      <td>3.0.1</td>
      <td>MIT License, Copyright (c) 2019</td>
    </tr>
    <tr>
      <td>dart_style</td>
      <td>Opinionated, automatic Dart source code formatter. Provides an API and a CLI tool.</td>
      <td></td>
      <td>https://github.com/dart-lang/dart_style</td>
      <td></td>
      <td>2.3.6</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>dbus</td>
      <td>A native Dart implementation of the D-Bus message bus client. This package allows Dart applications to directly access services on the Linux desktop.</td>
      <td>https://github.com/canonical/dbus.dart</td>
      <td></td>
      <td></td>
      <td>0.7.10</td>
      <td>Mozilla Public License Version 2.0</td>
    </tr>
    <tr>
      <td>decimal</td>
      <td>The decimal package allows you to deal with decimal numbers without losing precision.
</td>
      <td></td>
      <td>https://github.com/a14n/dart-decimal</td>
      <td></td>
      <td>3.0.2</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>device_info_plus</td>
      <td>Flutter plugin providing detailed information about the device (make, model, etc.), and Android or iOS version the app is running on.</td>
      <td>https://github.com/fluttercommunity/plus_plugins</td>
      <td>https://github.com/fluttercommunity/plus_plugins/tree/main/packages/device_info_plus/device_info_plus</td>
      <td></td>
      <td>10.1.2</td>
      <td>Chromium License, Copyright 2017 The Chromium Authors</td>
    </tr>
    <tr>
      <td>device_info_plus_platform_interface</td>
      <td>A common platform interface for the device_info_plus plugin.</td>
      <td>https://github.com/fluttercommunity/plus_plugins</td>
      <td>https://github.com/fluttercommunity/plus_plugins/tree/main/packages/</td>
      <td></td>
      <td>7.0.1</td>
      <td>Chromium License, Copyright 2017 The Chromium Authors</td>
    </tr>
    <tr>
      <td>drift</td>
      <td>Drift is a reactive library to store relational data in Dart and Flutter applications.</td>
      <td>https://drift.simonbinder.eu/</td>
      <td>https://github.com/simolus3/drift</td>
      <td>Simon Binder</td>
      <td>2.18.0</td>
      <td>MIT License, Copyright (c) 2021 </td>
    </tr>
    <tr>
      <td>ejson</td>
      <td>EJSON serialization.
BSON is a binary format used to store JSON-like documents efficiently.  EJSON extends JSON defining how all BSON types should be represented in JSON.</td>
      <td></td>
      <td>https://github.com/realm/realm-dart/ejson/packages/ejson</td>
      <td></td>
      <td>0.4.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>ejson_annotation</td>
      <td>Annotation for EJSON serialization.
BSON is a binary format used to store JSON-like documents efficiently.  EJSON extends JSON defining how all BSON types should be represented in JSON.</td>
      <td></td>
      <td>https://github.com/realm/realm-dart/ejson/packages/ejson_annotation</td>
      <td></td>
      <td>0.4.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>fake_async</td>
      <td>Fake asynchronous events such as timers and microtasks for deterministic testing.</td>
      <td></td>
      <td>https://github.com/dart-lang/fake_async</td>
      <td></td>
      <td>1.3.1</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>ffi</td>
      <td>Utilities for working with Foreign Function Interface (FFI) code.</td>
      <td></td>
      <td>https://github.com/dart-lang/native/tree/main/pkgs/ffi</td>
      <td></td>
      <td>2.1.3</td>
      <td>Dart Project License, Copyright 2019, the Dart project authors</td>
    </tr>
    <tr>
      <td>file</td>
      <td>A pluggable, mockable file system abstraction for Dart. Supports local file system access, as well as in-memory file systems, record-replay file systems, and chroot file systems.</td>
      <td></td>
      <td>https://github.com/dart-lang/tools/tree/main/pkgs/file</td>
      <td></td>
      <td>7.0.1</td>
      <td>Dart Project License, Copyright 2017, the Dart project authors</td>
    </tr>
    <tr>
      <td>file_selector_linux</td>
      <td>Liunx implementation of the file_selector plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/file_selector/file_selector_linux</td>
      <td></td>
      <td>0.9.3+1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>file_selector_macos</td>
      <td>macOS implementation of the file_selector plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/file_selector/file_selector_macos</td>
      <td></td>
      <td>0.9.4+2</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>file_selector_platform_interface</td>
      <td>A common platform interface for the file_selector plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/file_selector/file_selector_platform_interface</td>
      <td></td>
      <td>2.6.2</td>
      <td>Flutter License, Copyright 2013 The Flutter Authors</td>
    </tr>
    <tr>
      <td>file_selector_windows</td>
      <td>Windows implementation of the file_selector plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/file_selector/file_selector_windows</td>
      <td></td>
      <td>0.9.3+3</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>fixnum</td>
      <td>Library for 32- and 64-bit signed fixed-width integers with consistent behavior between native and JS runtimes.</td>
      <td></td>
      <td>https://github.com/dart-lang/core/tree/main/pkgs/fixnum</td>
      <td></td>
      <td>1.1.1</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>flutter</td>
      <td>A framework for writing Flutter applications</td>
      <td>https://flutter.dev</td>
      <td></td>
      <td></td>
      <td>3.22.3</td>
      <td>Flutter License, Copyright 2014 the Flutter Authors</td>
    </tr>
    <tr>
      <td>flutter_dotenv</td>
      <td>Easily configure any flutter application with global variables using a `.env` file.</td>
      <td>https://github.com/java-james/flutter_dotenv</td>
      <td></td>
      <td>java-james</td>
      <td>5.2.1</td>
      <td>The MIT License (MIT), Copyright (c) 2018</td>
    </tr>
    <tr>
      <td>flutter_launcher_icons</td>
      <td>A package which simplifies the task of updating your Flutter app's launcher icon.</td>
      <td>https://github.com/fluttercommunity/flutter_launcher_icons</td>
      <td>https://github.com/fluttercommunity/flutter_launcher_icons/</td>
      <td>Mark O'Sullivan</td>
      <td>0.14.1</td>
      <td>MIT License, Copyright (c) 2019</td>
    </tr>
    <tr>
      <td>flutter_lints</td>
      <td>Recommended lints for Flutter apps, packages, and plugins to encourage good coding practices.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/flutter_lints</td>
      <td></td>
      <td>4.0.0</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>flutter_native_splash</td>
      <td>Customize Flutter's default white native splash screen with background color and splash image. Supports dark mode, full screen, and more.</td>
      <td></td>
      <td>https://github.com/jonbhanson/flutter_native_splash</td>
      <td>Jon Hanson</td>
      <td>2.4.1</td>
      <td>MIT License, Copyright (c) 2022</td>
    </tr>
    <tr>
      <td>flutter_oss_licenses</td>
      <td>A tool to generate detail and better OSS license list using pubspec.yaml/lock files.</td>
      <td>https://github.com/espresso3389/flutter_oss_licenses/tree/master/packages/flutter_oss_licenses</td>
      <td>https://github.com/espresso3389/flutter_oss_licenses</td>
      <td>Takashi Kawasaki</td>
      <td>3.0.2</td>
      <td>MIT License, Copyright (c) 2019</td>
    </tr>
    <tr>
      <td>flutter_plugin_android_lifecycle</td>
      <td>Flutter plugin for accessing an Android Lifecycle within other plugins.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/flutter_plugin_android_lifecycle</td>
      <td></td>
      <td>2.0.22</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>frontend_server_client</td>
      <td>Client code to start and interact with the frontend_server compiler from the Dart SDK.</td>
      <td></td>
      <td>https://github.com/dart-lang/webdev/tree/master/frontend_server_client</td>
      <td></td>
      <td>4.0.0</td>
      <td>Dart Project License, Copyright 2020, the Dart project authors</td>
    </tr>
    <tr>
      <td>glob</td>
      <td>A library to perform Bash-style file and directory globbing.</td>
      <td></td>
      <td>https://github.com/dart-lang/glob</td>
      <td></td>
      <td>2.1.2</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>graphs</td>
      <td>Graph algorithms that operate on graphs in any representation.</td>
      <td></td>
      <td>https://github.com/dart-lang/tools/tree/main/pkgs/graphs</td>
      <td></td>
      <td>2.3.2</td>
      <td>Dart Project License, Copyright 2017, the Dart project authors</td>
    </tr>
    <tr>
      <td>html</td>
      <td>APIs for parsing and manipulating HTML content outside the browser.</td>
      <td></td>
      <td>https://github.com/dart-lang/tools/tree/main/pkgs/html</td>
      <td></td>
      <td>0.15.5</td>
      <td>Copyright (c) 2006-2012 The Authors</td>
    </tr>
    <tr>
      <td>http</td>
      <td>A composable, multi-platform, Future-based API for HTTP requests.</td>
      <td></td>
      <td>https://github.com/dart-lang/http/tree/master/pkgs/http</td>
      <td></td>
      <td>1.2.2</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>http2</td>
      <td>A HTTP/2 implementation in Dart.</td>
      <td></td>
      <td>https://github.com/dart-lang/http2</td>
      <td></td>
      <td>2.3.0</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>http_multi_server</td>
      <td>A dart:io HttpServer wrapper that handles requests from multiple servers.</td>
      <td></td>
      <td>https://github.com/dart-lang/http_multi_server</td>
      <td></td>
      <td>3.2.1</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>http_parser</td>
      <td>A platform-independent package for parsing and serializing HTTP formats.</td>
      <td></td>
      <td>https://github.com/dart-lang/http_parser</td>
      <td></td>
      <td>4.0.2</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>image</td>
      <td>Dart Image Library provides server and web apps the ability to load, manipulate, and save images with various image file formats.</td>
      <td>https://github.com/brendan-duncan/image</td>
      <td></td>
      <td>Brendan Duncan</td>
      <td>4.3.0</td>
      <td>The MIT License, Copyright (c) 2013-2022</td>
    </tr>
    <tr>
      <td>image_picker</td>
      <td>Flutter plugin for selecting images from the Android and iOS image library, and taking new pictures with the camera.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/image_picker/image_picker</td>
      <td></td>
      <td>1.1.2</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>image_picker_android</td>
      <td>Android implementation of the image_picker plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/image_picker/image_picker_android</td>
      <td></td>
      <td>0.8.12+12</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>image_picker_for_web</td>
      <td>Web platform implementation of image_picker</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/image_picker/image_picker_for_web</td>
      <td></td>
      <td>3.0.6</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>image_picker_ios</td>
      <td>iOS implementation of the image_picker plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/image_picker/image_picker_ios</td>
      <td></td>
      <td>0.8.12+1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>image_picker_linux</td>
      <td>Linux platform implementation of image_picker</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/image_picker/image_picker_linux</td>
      <td></td>
      <td>0.2.1+1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>image_picker_macos</td>
      <td>macOS platform implementation of image_picker</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/image_picker/image_picker_macos</td>
      <td></td>
      <td>0.2.1+1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>image_picker_platform_interface</td>
      <td>A common platform interface for the image_picker plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/image_picker/image_picker_platform_interface</td>
      <td></td>
      <td>2.10.0</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>image_picker_windows</td>
      <td>Windows platform implementation of image_picker</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/image_picker/image_picker_windows</td>
      <td></td>
      <td>0.2.1+1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>intl</td>
      <td>Contains code to deal with internationalized/localized messages, date and number formatting and parsing, bi-directional text, and other internationalization issues.</td>
      <td></td>
      <td>https://github.com/dart-lang/i18n/tree/main/pkgs/intl</td>
      <td></td>
      <td>0.19.0</td>
      <td>Dart Project License, Copyright 2013, the Dart project authors</td>
    </tr>
    <tr>
      <td>io</td>
      <td>Utilities for the Dart VM Runtime including support for ANSI colors, file copying, and standard exit code values.</td>
      <td></td>
      <td>https://github.com/dart-lang/io</td>
      <td></td>
      <td>1.0.4</td>
      <td>Dart Project License, Copyright 2017, the Dart project authors</td>
    </tr>
    <tr>
      <td>js</td>
      <td>Annotations to create static Dart interfaces for JavaScript APIs.</td>
      <td></td>
      <td>https://github.com/dart-lang/sdk/tree/main/pkg/js</td>
      <td></td>
      <td>0.7.1</td>
      <td>Dart Project License, Copyright 2012, the Dart project authors</td>
    </tr>
    <tr>
      <td>json_annotation</td>
      <td>Classes and helper functions that support JSON code generation via the `json_serializable` package.</td>
      <td></td>
      <td>https://github.com/google/json_serializable.dart/tree/master/json_annotation</td>
      <td></td>
      <td>4.9.0</td>
      <td>Dart Project License, Copyright 2017, the Dart project authors</td>
    </tr>
    <tr>
      <td>leak_tracker</td>
      <td>A framework for memory leak tracking for Dart and Flutter applications.</td>
      <td></td>
      <td>https://github.com/dart-lang/leak_tracker/tree/main/pkgs/leak_tracker</td>
      <td></td>
      <td>10.0.4</td>
      <td>Dart Project License, Copyright 2022, the Dart project authors</td>
    </tr>
    <tr>
      <td>leak_tracker_flutter_testing</td>
      <td>An internal package to test leak tracking with Flutter.</td>
      <td></td>
      <td>https://github.com/dart-lang/leak_tracker/tree/main/pkgs/leak_tracker_flutter_testing</td>
      <td></td>
      <td>3.0.3</td>
      <td>Dart Project License, Copyright 2022, the Dart project authors</td>
    </tr>
    <tr>
      <td>leak_tracker_testing</td>
      <td>Leak tracking code intended for usage in tests.</td>
      <td></td>
      <td>https://github.com/dart-lang/leak_tracker/tree/main/pkgs/leak_tracker_testing</td>
      <td></td>
      <td>3.0.1</td>
      <td>Dart Project License, Copyright 2022, the Dart project authors</td>
    </tr>
    <tr>
      <td>lints</td>
      <td>Official Dart lint rules. Defines the 'core' and 'recommended' set of lints suggested by the Dart team.
</td>
      <td></td>
      <td>https://github.com/dart-lang/lints</td>
      <td></td>
      <td>4.0.0</td>
      <td>Dart Project License, Copyright 2021, the Dart project authors</td>
    </tr>
    <tr>
      <td>logging</td>
      <td>Provides APIs for debugging and error logging, similar to loggers in other languages, such as the Closure JS Logger and java.util.logging.Logger.</td>
      <td></td>
      <td>https://github.com/dart-lang/core/tree/main/pkgs/logging</td>
      <td></td>
      <td>1.3.0</td>
      <td>Dart Project License, Copyright 2013, the Dart project authors</td>
    </tr>
    <tr>
      <td>matcher</td>
      <td>Support for specifying test expectations via an extensible Matcher class. Also includes a number of built-in Matcher implementations for common cases.</td>
      <td></td>
      <td>https://github.com/dart-lang/matcher</td>
      <td></td>
      <td>0.12.16+1</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>material_color_utilities</td>
      <td>Algorithms and utilities that power the Material Design 3 color system, including choosing theme colors from images and creating tones of colors; all in a new color space.</td>
      <td></td>
      <td>https://github.com/material-foundation/material-color-utilities/tree/main/dart</td>
      <td></td>
      <td>0.8.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>meta</td>
      <td>Annotations used to express developer intentions that can't otherwise be deduced by statically analyzing source code.</td>
      <td></td>
      <td>https://github.com/dart-lang/sdk/tree/main/pkg/meta</td>
      <td></td>
      <td>1.12.0</td>
      <td>Dart Project License, Copyright 2016, the Dart project authors</td>
    </tr>
    <tr>
      <td>mime</td>
      <td>Utilities for handling media (MIME) types, including determining a type from a file extension and file contents.</td>
      <td></td>
      <td>https://github.com/dart-lang/tools/tree/main/pkgs/mime</td>
      <td></td>
      <td>1.0.6</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>mobile_scanner</td>
      <td>A universal barcode and QR code scanner for Flutter based on MLKit. Uses CameraX on Android, AVFoundation on iOS and Apple Vision &amp; AVFoundation on macOS.</td>
      <td></td>
      <td>https://github.com/juliansteenbakker/mobile_scanner</td>
      <td>Julian Steenbakker</td>
      <td>5.2.3</td>
      <td>BSD 3-Clause License, Copyright (c) 2022</td>
    </tr>
    <tr>
      <td>nested</td>
      <td>A Flutter Widget which helps nest multiple widgets without needing to manually nest them.</td>
      <td></td>
      <td>https://github.com/rrousselGit/nested</td>
      <td>Remi Rousselet</td>
      <td>1.0.0</td>
      <td>MIT License, Copyright (c) 2019</td>
    </tr>
    <tr>
      <td>nm</td>
      <td>Provides a client to connect to NetworkManager - the service that manages network connections on Linux.</td>
      <td>https://github.com/canonical/nm.dart</td>
      <td></td>
      <td></td>
      <td>0.5.0</td>
      <td>Mozilla Public License Version 2.0</td>
    </tr>
    <tr>
      <td>oauth2</td>
      <td>A client library for authenticating with a remote service via OAuth2 on behalf of a user, and making authorized HTTP requests with the user's OAuth2 credentials.</td>
      <td></td>
      <td>https://github.com/dart-lang/tools/tree/main/pkgs/oauth2</td>
      <td></td>
      <td>2.0.3</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>objectid</td>
      <td>Blazing fast, cross-platform ObjectId implementation for the dart language.</td>
      <td>https://github.com/gonuit/dart_objectid</td>
      <td>https://github.com/gonuit/dart_objectid</td>
      <td>Kamil Klyta</td>
      <td>3.1.0</td>
      <td>MIT License, Copyright (c) 2020</td>
    </tr>
    <tr>
      <td>os_detect</td>
      <td>Platform independent OS detection.</td>
      <td></td>
      <td>https://github.com/dart-lang/core/tree/main/pkgs/os_detect</td>
      <td></td>
      <td>2.0.2</td>
      <td>Dart Project License, Copyright 2020, the Dart project authors</td>
    </tr>
    <tr>
      <td>package_config</td>
      <td>Support for reading and writing Dart Package Configuration files.</td>
      <td></td>
      <td>https://github.com/dart-lang/package_config</td>
      <td></td>
      <td>2.1.0</td>
      <td>Dart Project License, Copyright 2019, the Dart project authors</td>
    </tr>
    <tr>
      <td>package_info_plus</td>
      <td>Flutter plugin for querying information about the application package, such as CFBundleVersion on iOS or versionCode on Android.</td>
      <td>https://github.com/fluttercommunity/plus_plugins</td>
      <td>https://github.com/fluttercommunity/plus_plugins/tree/main/packages/package_info_plus/package_info_plus</td>
      <td></td>
      <td>8.1.1</td>
      <td>Chromium License, Copyright 2017 The Chromium Authors</td>
    </tr>
    <tr>
      <td>package_info_plus_platform_interface</td>
      <td>A common platform interface for the package_info_plus plugin.</td>
      <td>https://github.com/fluttercommunity/plus_plugins</td>
      <td>https://github.com/fluttercommunity/plus_plugins/tree/main/packages/</td>
      <td></td>
      <td>3.0.1</td>
      <td>Chromium License, Copyright 2017 The Chromium Authors</td>
    </tr>
    <tr>
      <td>path</td>
      <td>A string-based path manipulation library. All of the path operations you know and love, with solid support for Windows, POSIX (Linux and Mac OS X), and the web.</td>
      <td></td>
      <td>https://github.com/dart-lang/path</td>
      <td></td>
      <td>1.9.0</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>path_provider</td>
      <td>Flutter plugin for getting commonly used locations on host platform file systems, such as the temp and app data directories.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/path_provider/path_provider</td>
      <td></td>
      <td>2.1.5</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>path_provider_android</td>
      <td>Android implementation of the path_provider plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/path_provider/path_provider_android</td>
      <td></td>
      <td>2.2.10</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>path_provider_foundation</td>
      <td>iOS and macOS implementation of the path_provider plugin</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/path_provider/path_provider_foundation</td>
      <td></td>
      <td>2.4.0</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>path_provider_linux</td>
      <td>Linux implementation of the path_provider plugin</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/path_provider/path_provider_linux</td>
      <td></td>
      <td>2.2.1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>path_provider_platform_interface</td>
      <td>A common platform interface for the path_provider plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/path_provider/path_provider_platform_interface</td>
      <td></td>
      <td>2.1.2</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>path_provider_windows</td>
      <td>Windows implementation of the path_provider plugin</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/path_provider/path_provider_windows</td>
      <td></td>
      <td>2.3.0</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>petitparser</td>
      <td>A dynamic parser framework to build efficient grammars and parsers quickly.</td>
      <td>https://petitparser.github.io</td>
      <td>https://github.com/petitparser/dart-petitparser</td>
      <td>Lukas Renggli</td>
      <td>6.0.2</td>
      <td>The MIT License, Copyright (c) 2006-2023.</td>
    </tr>
    <tr>
      <td>platform</td>
      <td>A pluggable, mockable platform information abstraction for Dart.</td>
      <td></td>
      <td>https://github.com/dart-lang/core/tree/main/pkgs/platform</td>
      <td></td>
      <td>3.1.6</td>
      <td>Dart Project License, Copyright 2017, the Dart project authors</td>
    </tr>
    <tr>
      <td>plugin_platform_interface</td>
      <td>Reusable base class for platform interfaces of Flutter federated plugins, to help enforce best practices.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/plugin_platform_interface</td>
      <td></td>
      <td>2.1.8</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>pool</td>
      <td>Manage a finite pool of resources. Useful for controlling concurrent file system or network requests.</td>
      <td></td>
      <td>https://github.com/dart-lang/pool</td>
      <td></td>
      <td>1.5.1</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>provider</td>
      <td>A wrapper around InheritedWidget to make them easier to use and more reusable.</td>
      <td></td>
      <td>https://github.com/rrousselGit/provider</td>
      <td>Remi Rousselet</td>
      <td>6.1.2</td>
      <td>MIT License, Copyright (c) 2019</td>
    </tr>
    <tr>
      <td>pub_semver</td>
      <td>Versions and version constraints implementing pub's versioning policy. This is very similar to vanilla semver, with a few corner cases.</td>
      <td></td>
      <td>https://github.com/dart-lang/pub_semver</td>
      <td></td>
      <td>2.1.4</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>pubspec_parse</td>
      <td>Simple package for parsing pubspec.yaml files with a type-safe API and rich error reporting.</td>
      <td></td>
      <td>https://github.com/dart-lang/pubspec_parse</td>
      <td></td>
      <td>1.3.0</td>
      <td>Dart Project License, Copyright 2018, the Dart project authors</td>
    </tr>
    <tr>
      <td>qr</td>
      <td>A QR code generation library for Dart and Flutter. Supports QR code version 1 through 40, error correction and redundancy.</td>
      <td></td>
      <td>https://github.com/kevmoo/qr.dart</td>
      <td></td>
      <td>3.0.2</td>
      <td>Dart Project License, Copyright 2014, the Dart QR project authors.</td>
    </tr>
    <tr>
      <td>qr_flutter</td>
      <td>QR.Flutter is a Flutter library for simple and fast QR code rendering via a Widget or custom painter.
</td>
      <td>https://github.com/theyakka/qr.flutter</td>
      <td></td>
      <td>Luke Freeman</td>
      <td>4.1.0</td>
      <td>BSD 3-Clause License, Copyright (c) 2020</td>
    </tr>
    <tr>
      <td>rational</td>
      <td>The rational package allows you to deal with rational numbers.</td>
      <td>https://github.com/a14n/dart-rational</td>
      <td></td>
      <td></td>
      <td>2.2.3</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>realm</td>
      <td>The official Realm SDK for Flutter. Realm is a mobile database - an alternative to SQLite and key-value stores.</td>
      <td>https://www.realm.io</td>
      <td>https://github.com/realm/realm-dart</td>
      <td></td>
      <td>20.0.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>realm_common</td>
      <td>Hosts the common code shared between realm, realm_dart and realm_generator packages. This package is part of the official Realm Flutter and Realm Dart SDKs.</td>
      <td>https://www.realm.io</td>
      <td>https://github.com/realm/realm-dart</td>
      <td></td>
      <td>20.0.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>realm_dart</td>
      <td>The official Realm SDK for Dart. Realm is a mobile database - an alternative to SQLite and key-value stores.</td>
      <td>https://www.realm.io</td>
      <td>https://github.com/realm/realm-dart</td>
      <td></td>
      <td>20.0.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>realm_generator</td>
      <td>Generates RealmObject classes from Realm data model classes. This package is part of the official Realm Flutter and Realm Dart SDKs.</td>
      <td>https://www.realm.io</td>
      <td>https://github.com/realm/realm-dart</td>
      <td></td>
      <td>20.0.0</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>retry</td>
      <td>Utility for wrapping an asynchronous function in automatic retry logic with exponential back-off, useful when making requests over network.</td>
      <td>https://github.com/google/dart-neats/tree/master/retry</td>
      <td>https://github.com/google/dart-neats.git</td>
      <td></td>
      <td>3.1.2</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>sane_uuid</td>
      <td>A sane UUID implementation with support for generating and handling v1, v4 and v5 UUIDs according to RFC4122.
</td>
      <td>https://github.com/BjoernPetersen/sane_uuid</td>
      <td></td>
      <td>Björn Petersen</td>
      <td>1.1.0</td>
      <td>MIT License, Copyright (c) 2024</td>
    </tr>
    <tr>
      <td>shared_preferences</td>
      <td>Flutter plugin for reading and writing simple key-value pairs. Wraps NSUserDefaults on iOS and SharedPreferences on Android.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/shared_preferences/shared_preferences</td>
      <td></td>
      <td>2.3.3</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>shared_preferences_android</td>
      <td>Android implementation of the shared_preferences plugin</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/shared_preferences/shared_preferences_android</td>
      <td></td>
      <td>2.3.2</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>shared_preferences_foundation</td>
      <td>iOS and macOS implementation of the shared_preferences plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/shared_preferences/shared_preferences_foundation</td>
      <td></td>
      <td>2.5.3</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>shared_preferences_linux</td>
      <td>Linux implementation of the shared_preferences plugin</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/shared_preferences/shared_preferences_linux</td>
      <td></td>
      <td>2.4.1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>shared_preferences_platform_interface</td>
      <td>A common platform interface for the shared_preferences plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/shared_preferences/shared_preferences_platform_interface</td>
      <td></td>
      <td>2.4.1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>shared_preferences_web</td>
      <td>Web platform implementation of shared_preferences</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/shared_preferences/shared_preferences_web</td>
      <td></td>
      <td>2.4.2</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>shared_preferences_windows</td>
      <td>Windows implementation of shared_preferences</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/shared_preferences/shared_preferences_windows</td>
      <td></td>
      <td>2.4.1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>shelf</td>
      <td>A model for web server middleware that encourages composition and easy reuse.
</td>
      <td></td>
      <td>https://github.com/dart-lang/shelf/tree/master/pkgs/shelf</td>
      <td></td>
      <td>1.4.1</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>shelf_web_socket</td>
      <td>A shelf handler that wires up a listener for every connection.
</td>
      <td></td>
      <td>https://github.com/dart-lang/shelf/tree/master/pkgs/shelf_web_socket</td>
      <td></td>
      <td>2.0.0</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>smithy</td>
      <td>Smithy client runtime for Dart with common utilities for I/O and serialization.</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/smithy/smithy</td>
      <td></td>
      <td>0.7.3</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>smithy_aws</td>
      <td>Smithy runtime for AWS clients with utilities for endpoint resolution, retry behavior, and SigV4 signing.</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/smithy/smithy_aws</td>
      <td></td>
      <td>0.7.3</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>source_gen</td>
      <td>Source code generation builders and utilities for the Dart build system</td>
      <td></td>
      <td>https://github.com/dart-lang/source_gen/tree/master/source_gen</td>
      <td></td>
      <td>1.5.0</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>source_span</td>
      <td>Provides a standard representation for source code locations and spans.</td>
      <td></td>
      <td>https://github.com/dart-lang/source_span</td>
      <td></td>
      <td>1.10.0</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>sprintf</td>
      <td>Dart implementation of sprintf. Provides simple printf like formatting such as sprintf("hello %s", ["world"]);</td>
      <td>https://github.com/Naddiseo/dart-sprintf</td>
      <td></td>
      <td> Richard Eames</td>
      <td>7.0.0</td>
      <td>Copyright (c) 2012, Richard Eames</td>
    </tr>
    <tr>
      <td>sqlite3</td>
      <td>Provides lightweight yet convenient bindings to SQLite by using dart:ffi</td>
      <td>https://github.com/simolus3/sqlite3.dart/tree/main/sqlite3</td>
      <td></td>
      <td>Simon Binder</td>
      <td>2.4.5</td>
      <td>MIT License, Copyright (c) 2020</td>
    </tr>
    <tr>
      <td>stack_trace</td>
      <td>A package for manipulating stack traces and printing them readably.</td>
      <td></td>
      <td>https://github.com/dart-lang/stack_trace</td>
      <td></td>
      <td>1.11.1</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>stream_channel</td>
      <td>An abstraction for two-way communication channels based on the Dart Stream class.</td>
      <td></td>
      <td>https://github.com/dart-lang/stream_channel</td>
      <td></td>
      <td>2.1.2</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>stream_transform</td>
      <td>A collection of utilities to transform and manipulate streams.</td>
      <td></td>
      <td>https://github.com/dart-lang/stream_transform</td>
      <td></td>
      <td>2.1.0</td>
      <td>Dart Project License, Copyright 2017, the Dart project authors</td>
    </tr>
    <tr>
      <td>string_scanner</td>
      <td>A class for parsing strings using a sequence of patterns.</td>
      <td></td>
      <td>https://github.com/dart-lang/string_scanner</td>
      <td></td>
      <td>1.2.0</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>tar</td>
      <td>Memory-efficient, streaming implementation of the tar file format</td>
      <td></td>
      <td>https://github.com/simolus3/tar/</td>
      <td>Simon Binder</td>
      <td>1.0.5</td>
      <td>MIT License, Copyright (c) 2021</td>
    </tr>
    <tr>
      <td>term_glyph</td>
      <td>Useful Unicode glyphs and ASCII substitutes.</td>
      <td></td>
      <td>https://github.com/dart-lang/term_glyph</td>
      <td></td>
      <td>1.2.1</td>
      <td>Dart Project License, Copyright 2017, the Dart project authors</td>
    </tr>
    <tr>
      <td>test_api</td>
      <td>The user facing API for structuring Dart tests and checking expectations.</td>
      <td></td>
      <td>https://github.com/dart-lang/test/tree/master/pkgs/test_api</td>
      <td></td>
      <td>0.7.0</td>
      <td>Dart Project License, Copyright 2018, the Dart project authors</td>
    </tr>
    <tr>
      <td>timing</td>
      <td>A simple package for tracking the performance of synchronous and asynchronous actions.</td>
      <td></td>
      <td>https://github.com/dart-lang/timing</td>
      <td></td>
      <td>1.0.1</td>
      <td>Dart Project License, Copyright 2018, the Dart project authors</td>
    </tr>
    <tr>
      <td>tuple</td>
      <td>A library providing a tuple data structure.</td>
      <td></td>
      <td>https://github.com/google/tuple.dart</td>
      <td></td>
      <td>2.0.2</td>
      <td>Copyright (c) 2014, the tuple project authors.</td>
    </tr>
    <tr>
      <td>type_plus</td>
      <td>Give your types superpowers and spice up your generics. Make types great again.</td>
      <td></td>
      <td>https://github.com/schultek/type_plus</td>
      <td>Kilian Schulte</td>
      <td>2.1.1</td>
      <td>MIT License, Copyright (c) 2021</td>
    </tr>
    <tr>
      <td>typed_data</td>
      <td>Utility functions and classes related to the dart:typed_data library.</td>
      <td></td>
      <td>https://github.com/dart-lang/typed_data</td>
      <td></td>
      <td>1.3.2</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>universal_io</td>
      <td>Cross-platform 'dart:io' that adds browser support for HttpClient and some other "dart:io" APIs.</td>
      <td>https://github.com/dart-io-packages/universal_io</td>
      <td></td>
      <td></td>
      <td>2.2.2</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>url_launcher</td>
      <td>Flutter plugin for launching a URL. Supports web, phone, SMS, and email schemes.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher</td>
      <td></td>
      <td>6.3.1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>url_launcher_android</td>
      <td>Android implementation of the url_launcher plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher_android</td>
      <td></td>
      <td>6.3.9</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>url_launcher_ios</td>
      <td>iOS implementation of the url_launcher plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher_ios</td>
      <td></td>
      <td>6.3.1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>url_launcher_linux</td>
      <td>Linux implementation of the url_launcher plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher_linux</td>
      <td></td>
      <td>3.2.1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>url_launcher_macos</td>
      <td>macOS implementation of the url_launcher plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher_macos</td>
      <td></td>
      <td>3.2.1</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>url_launcher_platform_interface</td>
      <td>A common platform interface for the url_launcher plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher_platform_interface</td>
      <td></td>
      <td>2.3.2</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>url_launcher_web</td>
      <td>Web platform implementation of url_launcher</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher_web</td>
      <td></td>
      <td>2.3.3</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>url_launcher_windows</td>
      <td>Windows implementation of the url_launcher plugin.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher_windows</td>
      <td></td>
      <td>3.1.3</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>uuid</td>
      <td>RFC4122 (v1, v4, v5, v6, v7, v8) UUID Generator and Parser for Dart
</td>
      <td></td>
      <td>https://github.com/Daegalus/dart-uuid</td>
      <td>Yulian Kuncheff</td>
      <td>4.5.1</td>
      <td>Copyright (c) 2021</td>
    </tr>
    <tr>
      <td>vector_math</td>
      <td>A Vector Math library for 2D and 3D applications.</td>
      <td></td>
      <td>https://github.com/google/vector_math.dart</td>
      <td></td>
      <td>2.1.4</td>
      <td>Google License, Copyright 2015, Google Inc.</td>
    </tr>
    <tr>
      <td>vm_service</td>
      <td>A library to communicate with a service implementing the Dart VM service protocol.</td>
      <td></td>
      <td>https://github.com/dart-lang/sdk/tree/main/pkg/vm_service</td>
      <td></td>
      <td>14.2.1</td>
      <td>Dart Project License, Copyright 2015, the Dart project authors</td>
    </tr>
    <tr>
      <td>watcher</td>
      <td>A file system watcher. It monitors changes to contents of directories and sends notifications when files have been added, removed, or modified.</td>
      <td></td>
      <td>https://github.com/dart-lang/watcher</td>
      <td></td>
      <td>1.1.0</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
    <tr>
      <td>web</td>
      <td>Lightweight browser API bindings built around JS static interop.</td>
      <td></td>
      <td>https://github.com/dart-lang/web</td>
      <td></td>
      <td>0.5.1</td>
      <td>Dart Project License, Copyright 2023, the Dart project authors</td>
    </tr>
    <tr>
      <td>web_socket_channel</td>
      <td>StreamChannel wrappers for WebSockets. Provides a cross-platform WebSocketChannel API, a cross-platform implementation of that API that communicates over an underlying StreamChannel.</td>
      <td></td>
      <td>https://github.com/dart-lang/web_socket_channel</td>
      <td></td>
      <td>2.4.5</td>
      <td>Dart Project License, Copyright 2016, the Dart project authors</td>
    </tr>
    <tr>
      <td>widget_zoom</td>
      <td>A widget to zoom another widget either directly in an overlay or in fullscreen.</td>
      <td>https://github.com/appinioGmbH/flutter_packages</td>
      <td>https://github.com/appinioGmbH/flutter_packages/tree/main/packages/widget_zoom</td>
      <td>APPINIO GmbH</td>
      <td>0.0.4</td>
      <td>The MIT License (MIT) Copyright (c) 2022</td>
    </tr>
    <tr>
      <td>win32</td>
      <td>Access common Win32 APIs directly from Dart using FFI — no C required!
</td>
      <td>https://win32.pub</td>
      <td>https://github.com/halildurmus/win32</td>
      <td>Halil Durmus</td>
      <td>5.5.4</td>
      <td>BSD 3-Clause License, Copyright (c) 2024</td>
    </tr>
    <tr>
      <td>win32_registry</td>
      <td>A package that provides a friendly Dart API for accessing the Windows Registry.</td>
      <td></td>
      <td>https://github.com/halildurmus/win32_registry</td>
      <td>Halil Durmus</td>
      <td>1.1.5</td>
      <td>BSD 3-Clause License, Copyright (c) 2023</td>
    </tr>
    <tr>
      <td>worker_bee</td>
      <td>A cross-platform isolated worker runtime for Dart Web, VM, and Flutter.</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main</td>
      <td>https://github.com/aws-amplify/amplify-flutter/tree/main/packages/worker_bee/worker_bee</td>
      <td></td>
      <td>0.3.3</td>
      <td>Apache License Version 2.0, January 2004</td>
    </tr>
    <tr>
      <td>xdg_directories</td>
      <td>A Dart package for reading XDG directory configuration information on Linux.</td>
      <td></td>
      <td>https://github.com/flutter/packages/tree/main/packages/xdg_directories</td>
      <td></td>
      <td>1.1.0</td>
      <td>Flutter License, Copyright 2013, the Flutter Authors</td>
    </tr>
    <tr>
      <td>xml</td>
      <td>A lightweight library for parsing, traversing, querying, transforming and building XML documents.</td>
      <td>https://github.com/renggli/dart-xml</td>
      <td></td>
      <td>Lukas Renggli</td>
      <td>6.5.0</td>
      <td>The MIT License, Copyright (c) 2006-2023</td>
    </tr>
    <tr>
      <td>yaml</td>
      <td>A parser for YAML, a human-friendly data serialization standard</td>
      <td></td>
      <td>https://github.com/dart-lang/yaml</td>
      <td>Kirill Simonov</td>
      <td>3.1.2</td>
      <td>Dart Project License, Copyright 2014, the Dart project authors</td>
    </tr>
  </tbody>
</table>

<br>
{{< /rawhtml >}}

## 2. Details zu genutzten Lizenzen

### 2.1 Apache License 2.0

http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

---

### 2.2 Dart Project License

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---

### 2.13 Flutter License

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google Inc. nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---

### 2.14 MIT License 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---


### 2.15 Mozilla Public License Version 2.0

==================================

1. Definitions
--------------

1.1. "Contributor"
    means each individual or legal entity that creates, contributes to
    the creation of, or owns Covered Software.

1.2. "Contributor Version"
    means the combination of the Contributions of others (if any) used
    by a Contributor and that particular Contributor's Contribution.

1.3. "Contribution"
    means Covered Software of a particular Contributor.

1.4. "Covered Software"
    means Source Code Form to which the initial Contributor has attached
    the notice in Exhibit A, the Executable Form of such Source Code
    Form, and Modifications of such Source Code Form, in each case
    including portions thereof.

1.5. "Incompatible With Secondary Licenses"
    means

    (a) that the initial Contributor has attached the notice described
        in Exhibit B to the Covered Software; or

    (b) that the Covered Software was made available under the terms of
        version 1.1 or earlier of the License, but not also under the
        terms of a Secondary License.

1.6. "Executable Form"
    means any form of the work other than Source Code Form.

1.7. "Larger Work"
    means a work that combines Covered Software with other material, in
    a separate file or files, that is not Covered Software.

1.8. "License"
    means this document.

1.9. "Licensable"
    means having the right to grant, to the maximum extent possible,
    whether at the time of the initial grant or subsequently, any and
    all of the rights conveyed by this License.

1.10. "Modifications"
    means any of the following:

    (a) any file in Source Code Form that results from an addition to,
        deletion from, or modification of the contents of Covered
        Software; or

    (b) any new file in Source Code Form that contains any Covered
        Software.

1.11. "Patent Claims" of a Contributor
    means any patent claim(s), including without limitation, method,
    process, and apparatus claims, in any patent Licensable by such
    Contributor that would be infringed, but for the grant of the
    License, by the making, using, selling, offering for sale, having
    made, import, or transfer of either its Contributions or its
    Contributor Version.

1.12. "Secondary License"
    means either the GNU General Public License, Version 2.0, the GNU
    Lesser General Public License, Version 2.1, the GNU Affero General
    Public License, Version 3.0, or any later versions of those
    licenses.

1.13. "Source Code Form"
    means the form of the work preferred for making modifications.

1.14. "You" (or "Your")
    means an individual or a legal entity exercising rights under this
    License. For legal entities, "You" includes any entity that
    controls, is controlled by, or is under common control with You. For
    purposes of this definition, "control" means (a) the power, direct
    or indirect, to cause the direction or management of such entity,
    whether by contract or otherwise, or (b) ownership of more than
    fifty percent (50%) of the outstanding shares or beneficial
    ownership of such entity.

2. License Grants and Conditions
--------------------------------

2.1. Grants

Each Contributor hereby grants You a world-wide, royalty-free,
non-exclusive license:

(a) under intellectual property rights (other than patent or trademark)
    Licensable by such Contributor to use, reproduce, make available,
    modify, display, perform, distribute, and otherwise exploit its
    Contributions, either on an unmodified basis, with Modifications, or
    as part of a Larger Work; and

(b) under Patent Claims of such Contributor to make, use, sell, offer
    for sale, have made, import, and otherwise transfer either its
    Contributions or its Contributor Version.

2.2. Effective Date

The licenses granted in Section 2.1 with respect to any Contribution
become effective for each Contribution on the date the Contributor first
distributes such Contribution.

2.3. Limitations on Grant Scope

The licenses granted in this Section 2 are the only rights granted under
this License. No additional rights or licenses will be implied from the
distribution or licensing of Covered Software under this License.
Notwithstanding Section 2.1(b) above, no patent license is granted by a
Contributor:

(a) for any code that a Contributor has removed from Covered Software;
    or

(b) for infringements caused by: (i) Your and any other third party's
    modifications of Covered Software, or (ii) the combination of its
    Contributions with other software (except as part of its Contributor
    Version); or

(c) under Patent Claims infringed by Covered Software in the absence of
    its Contributions.

This License does not grant any rights in the trademarks, service marks,
or logos of any Contributor (except as may be necessary to comply with
the notice requirements in Section 3.4).

2.4. Subsequent Licenses

No Contributor makes additional grants as a result of Your choice to
distribute the Covered Software under a subsequent version of this
License (see Section 10.2) or under the terms of a Secondary License (if
permitted under the terms of Section 3.3).

2.5. Representation

Each Contributor represents that the Contributor believes its
Contributions are its original creation(s) or it has sufficient rights
to grant the rights to its Contributions conveyed by this License.

2.6. Fair Use

This License is not intended to limit any rights You have under
applicable copyright doctrines of fair use, fair dealing, or other
equivalents.

2.7. Conditions

Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted
in Section 2.1.

3. Responsibilities
-------------------

3.1. Distribution of Source Form

All distribution of Covered Software in Source Code Form, including any
Modifications that You create or to which You contribute, must be under
the terms of this License. You must inform recipients that the Source
Code Form of the Covered Software is governed by the terms of this
License, and how they can obtain a copy of this License. You may not
attempt to alter or restrict the recipients' rights in the Source Code
Form.

3.2. Distribution of Executable Form

If You distribute Covered Software in Executable Form then:

(a) such Covered Software must also be made available in Source Code
    Form, as described in Section 3.1, and You must inform recipients of
    the Executable Form how they can obtain a copy of such Source Code
    Form by reasonable means in a timely manner, at a charge no more
    than the cost of distribution to the recipient; and

(b) You may distribute such Executable Form under the terms of this
    License, or sublicense it under different terms, provided that the
    license for the Executable Form does not attempt to limit or alter
    the recipients' rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work

You may create and distribute a Larger Work under terms of Your choice,
provided that You also comply with the requirements of this License for
the Covered Software. If the Larger Work is a combination of Covered
Software with a work governed by one or more Secondary Licenses, and the
Covered Software is not Incompatible With Secondary Licenses, this
License permits You to additionally distribute such Covered Software
under the terms of such Secondary License(s), so that the recipient of
the Larger Work may, at their option, further distribute the Covered
Software under the terms of either this License or such Secondary
License(s).

3.4. Notices

You may not remove or alter the substance of any license notices
(including copyright notices, patent notices, disclaimers of warranty,
or limitations of liability) contained within the Source Code Form of
the Covered Software, except that You may alter any license notices to
the extent required to remedy known factual inaccuracies.

3.5. Application of Additional Terms

You may choose to offer, and to charge a fee for, warranty, support,
indemnity or liability obligations to one or more recipients of Covered
Software. However, You may do so only on Your own behalf, and not on
behalf of any Contributor. You must make it absolutely clear that any
such warranty, support, indemnity, or liability obligation is offered by
You alone, and You hereby agree to indemnify every Contributor for any
liability incurred by such Contributor as a result of warranty, support,
indemnity or liability terms You offer. You may include additional
disclaimers of warranty and limitations of liability specific to any
jurisdiction.

4. Inability to Comply Due to Statute or Regulation
---------------------------------------------------

If it is impossible for You to comply with any of the terms of this
License with respect to some or all of the Covered Software due to
statute, judicial order, or regulation then You must: (a) comply with
the terms of this License to the maximum extent possible; and (b)
describe the limitations and the code they affect. Such description must
be placed in a text file included with all distributions of the Covered
Software under this License. Except to the extent prohibited by statute
or regulation, such description must be sufficiently detailed for a
recipient of ordinary skill to be able to understand it.

5. Termination
--------------

5.1. The rights granted under this License will terminate automatically
if You fail to comply with any of its terms. However, if You become
compliant, then the rights granted under this License from a particular
Contributor are reinstated (a) provisionally, unless and until such
Contributor explicitly and finally terminates Your grants, and (b) on an
ongoing basis, if such Contributor fails to notify You of the
non-compliance by some reasonable means prior to 60 days after You have
come back into compliance. Moreover, Your grants from a particular
Contributor are reinstated on an ongoing basis if such Contributor
notifies You of the non-compliance by some reasonable means, this is the
first time You have received notice of non-compliance with this License
from such Contributor, and You become compliant prior to 30 days after
Your receipt of the notice.

5.2. If You initiate litigation against any entity by asserting a patent
infringement claim (excluding declaratory judgment actions,
counter-claims, and cross-claims) alleging that a Contributor Version
directly or indirectly infringes any patent, then the rights granted to
You by any and all Contributors for the Covered Software under Section
2.1 of this License shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all
end user license agreements (excluding distributors and resellers) which
have been validly granted by You or Your distributors under this License
prior to termination shall survive termination.


  6. Disclaimer of Warranty                                           
  -------------------------                                           
                                                                      
  Covered Software is provided under this License on an "as is"       
  basis, without warranty of any kind, either expressed, implied, or  
  statutory, including, without limitation, warranties that the       
  Covered Software is free of defects, merchantable, fit for a        
  particular purpose or non-infringing. The entire risk as to the     
  quality and performance of the Covered Software is with You.       
  Should any Covered Software prove defective in any respect, You     
  (not any Contributor) assume the cost of any necessary servicing,   
  repair, or correction. This disclaimer of warranty constitutes an   
  essential part of this License. No use of any Covered Software is   
  authorized under this License except under this disclaimer.         

  7. Limitation of Liability                                          
  --------------------------                                          
                                                                     
  Under no circumstances and under no legal theory, whether tort      
  (including negligence), contract, or otherwise, shall any           
  Contributor, or anyone who distributes Covered Software as          
  permitted above, be liable to You for any direct, indirect,         
  special, incidental, or consequential damages of any character      
  including, without limitation, damages for lost profits, loss of    
  goodwill, work stoppage, computer failure or malfunction, or any    
  and all other commercial damages or losses, even if such party      
  shall have been informed of the possibility of such damages. This   
  limitation of liability shall not apply to liability for death or   
  personal injury resulting from such party's negligence to the       
  extent applicable law prohibits such limitation. Some               
  jurisdictions do not allow the exclusion or limitation of           
  incidental or consequential damages, so this exclusion and          
  limitation may not apply to You.                                    

1. Litigation
-------------

Any litigation relating to this License may be brought only in the
courts of a jurisdiction where the defendant maintains its principal
place of business and such litigation shall be governed by laws of that
jurisdiction, without reference to its conflict-of-law provisions.
Nothing in this Section shall prevent a party's ability to bring
cross-claims or counter-claims.

9. Miscellaneous
----------------

This License represents the complete agreement concerning the subject
matter hereof. If any provision of this License is held to be
unenforceable, such provision shall be reformed only to the extent
necessary to make it enforceable. Any law or regulation which provides
that the language of a contract shall be construed against the drafter
shall not be used to construe this License against a Contributor.

10. Versions of the License
---------------------------

10.1. New Versions

Mozilla Foundation is the license steward. Except as provided in Section
10.3, no one other than the license steward has the right to modify or
publish new versions of this License. Each version will be given a
distinguishing version number.

10.2. Effect of New Versions

You may distribute the Covered Software under the terms of the version
of the License under which You originally received the Covered Software,
or under the terms of any subsequent version published by the license
steward.

10.3. Modified Versions

If you create software not governed by this License, and you want to
create a new license for such software, you may create and use a
modified version of this License if you rename the license and remove
any references to the name of the license steward (except to note that
such modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary
Licenses

If You choose to distribute Source Code Form that is Incompatible With
Secondary Licenses under the terms of this version of the License, the
notice described in Exhibit B of this License must be attached.

Exhibit A - Source Code Form License Notice
-------------------------------------------

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular
file, then You may include the notice in a location (such as a LICENSE
file in a relevant directory) where a recipient would be likely to look
for such a notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - "Incompatible With Secondary Licenses" Notice
---------------------------------------------------------

  This Source Code Form is "Incompatible With Secondary Licenses", as
  defined by the Mozilla Public License, v. 2.0.

---

### 2.16 Chromium License

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

   * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.
   * Neither the name of Google Inc. nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---

### 2.17 BSD 3-Clause License

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---

### 2.18 Google Inc. License

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

   * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.

   * Neither the name of Google Inc. nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---

### 2.19 HTML Dart Package License

Contributors:  
James Graham - jg307@cam.ac.uk  
Anne van Kesteren - annevankesteren@gmail.com  
Lachlan Hunt - lachlan.hunt@lachy.id.au  
Matt McDonald - kanashii@kanashii.ca  
Sam Ruby - rubys@intertwingly.net  
Ian Hickson (Google) - ian@hixie.ch  
Thomas Broyer - t.broyer@ltgt.net  
Jacques Distler - distler@golem.ph.utexas.edu  
Henri Sivonen - hsivonen@iki.fi  
Adam Barth - abarth@webkit.org  
Eric Seidel - eric@webkit.org  
The Mozilla Foundation (contributions from Henri Sivonen since 2008)  
David Flanagan (Mozilla) - dflanagan@mozilla.com  
Google LLC (contributed the Dart port) - misc@dartlang.org  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

### 2.20 sprintf Dart Package License

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, 
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this 
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, 
   this list of conditions and the following disclaimer in the documentation 
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES 
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; 
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON 
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS 
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---

### 2.21 tuple Dart Package License

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL &lt;COPYRIGHT HOLDER&gt; BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---

### 2.21 uuid Dart Package License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---